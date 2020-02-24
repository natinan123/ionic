import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-req',
  templateUrl: './list-req.component.html',
  styleUrls: ['./list-req.component.scss'],
})
export class ListReqComponent implements OnInit {
  user: any;
  require: Object;

  constructor(
    private service: ServerService,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);

    this.getRequire();
  }

  getRequire() {
    this.service.getRequire(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.require = res;
      })

  }

}
