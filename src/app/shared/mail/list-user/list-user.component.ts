import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, Platform } from '@ionic/angular';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  modalTitle: string;
  modelId: number;
  Member: Object;
  user: any;
  jsonData: any;
  searchText;
  add_email: any;
  

  constructor(
    private service: ServerService,
    private session: SessionService,
    private modalController: ModalController,
    private navParams: NavParams,
    public navCtrl: NavController,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUser();
    this.user = this.session.getActiveUser();
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  getUser() {
    this.service.getUser().subscribe(
      (res) => {
        console.table(res);
        this.jsonData = res
      }
    )
  }


  addChat(data) {
    console.log(data);
    this.add_email = data.email_id;
    this.postFirstChat();

  }
  // ส่งข้อความติดต่อครั้งแรก
  postFirstChat() {
    const data = {
      source: this.user[0].email_id,
      descination: this.add_email
    }
    console.log(data);
    this.service.postFirstChat(data).subscribe(
      async (res) => {

        // if (this.user[0].cus_status == "seller") {
        //   this.router.navigate(['seller/seller/mail']);
        // }
        // if (this.user[0].cus_status == "buyer") {
        //   this.router.navigate(['buyer/buyer/mail']);

        // }
        this.closeModal();


  
      }
    )
  }


  
}
