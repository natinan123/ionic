import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any;
  poppular: any;
  recoms: any;
  user: any;
  status: any;
  link: string;


  constructor(
    private service: ServerService,
    private session: SessionService,

  ) { }

  ngOnInit() {

    // this.getProperty();
    this.getPoppular();
    this.getRecom();
    this.user = this.session.getActiveUser();
    this.status = this.user[0].cus_status;
    if (this.user[0].cus_status == null || this.user[0].cus_status == "") {
      this.link = '/mainpage/mainpage/prodetail';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/prodetail';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/prodetail';
    } 
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/prodetail';
    }
  }


  // getProperty() {
  //   this.service.getProperty().subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.products = res;
  //       console.log(this.products);

  //     })
  // }

  getPoppular() {
    this.service.getPoppular().subscribe(
      (res) => {
        console.log('รายการ',res);
        this.poppular = res;
   

      })
  }

  getRecom() {
    this.service.getRecommainpage().subscribe(
      (res) => {
        console.log('แนะนำ',res);
        this.recoms = res;
        // this.recom_pic = res.result;
        // console.log(this.recom_pic);
      })
  }
}
