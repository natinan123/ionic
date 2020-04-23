import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Platform, NavController, ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  user: any;

  chat: Object;
  data;
  name: any;
  descination: string[];
  fname: any;
  lname: any;
  My: any;
  taxtChat = new FormControl('');
  user_des: Object;
  profile_pic: any;

  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private router: Router,
    public navCtrl: NavController,
    public platform: Platform,
    private navParams: NavParams,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  // !
  ngOnInit() {
    this.user = this.session.getActiveUser();
    // this.descination = this.route.snapshot.paramMap.getAll('descination');
    this.My = this.user[0].email_id;

    console.log(this.user);
    console.log(this.descination);

    this.getChatDetail();
    this.descination = this.navParams.data.descination;

  }


  // ดูข้อความ
  getChatDetail() {
    const source = this.user[0].email_id;
    const descination = this.descination;
    this.service.getChat(source, descination).subscribe(
      (res) => {
        console.log('user', res);
        this.chat = res;
        
      })
    this.service.getProfile(descination).subscribe(
      (res) => {
        console.log('des', res);
        this.user_des = res;
        this.profile_pic = res[0].profile_pic;
        this.fname = res[0].fname;
        this.lname = res[0].lname;
      })
  }


  // ส่งข้อความติดต่อ
  postTaxtChat(textchat) {
    const data = {
      source: this.user[0].email_id,
      descination: this.descination,
      mes_text: textchat
    }
    console.log(data);
    this.service.postChat(data).subscribe(
      async (res) => {
        this.getChatDetail();
        this.clearInputMethod1();

      }
    )
  }

  // ล้างข้อความ
  clearInputMethod1() {
    this.taxtChat.reset();
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
