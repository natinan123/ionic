import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ModalController, NavController } from '@ionic/angular';
import { ListUserComponent } from './list-user/list-user.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailComponent implements OnInit {
  user: any;
  My: any;
  Chatuser: Object;
  status: any;
  link: string;
  dataReturned: any;

  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
    public platform: Platform,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.getChatUser();

    // console.log(this.user);
    this.status = this.user[0].cus_status;
    if (this.user[0].cus_status == null || this.user[0].cus_status == "") {
      this.link = '/mainpage/mainpage/message';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/message';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/message';
    }
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/message';
    }
  }

  // ดูผู้ติดต่อ
  getChatUser() {
    const source = this.user[0].email_id;
    this.service.getChatUser(source).subscribe(
      (res) => {
        console.log(res);
        this.Chatuser = res;
      })
  }



  async openModal() {
    const modal = await this.modalController.create({
      component: ListUserComponent,
      componentProps: {
        "paramID": "a",
        "paramTitle": "Test Title"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
      this.getChatUser()
    });

    return await modal.present();
  }

  async openChat(data) {
    const modal = await this.modalController.create({
      component: MessageComponent,
      componentProps: {
        "descination": data.descination,
        // "longtitude": this.longtitude
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }



}
