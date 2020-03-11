import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  user: any;
  list_follow: Object;
  status: any;
  link: string;


  constructor(
    public platform: Platform,
    private session: SessionService,
    private service: ServerService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);
    this.getProfollow();
    this.status = this.user[0].cus_status;

    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/prodetail';
    }
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/prodetail';
    }
  }


  // รายการการติดตาม
  getProfollow() {
    this.service.getProFollow(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.list_follow = res;
      })
  }


}
