import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  user: any;
  require: Object;
  match: Object;
  status: any;
  link: string;

  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user)

    // this.getRequire();
    this.getReqmatchList();
    this.status = this.user[0].cus_status;

    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/prodetail';
    }
  
  }

  // // get รายการความต้องการ
  // getRequire() {
  //   this.service.getRequire(this.user[0].email_id).subscribe(
  //     (res) => {
  //       // console.log(res);
  //       this.require = res;

  //     }
  //   )
  // }

  getReqmatchList() {

    this.service.getReqMatch(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.match = res;


      })
  }
}
