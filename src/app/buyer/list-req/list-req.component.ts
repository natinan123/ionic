import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { ListReqDetailComponent } from './list-req-detail/list-req-detail.component';

@Component({
  selector: 'app-list-req',
  templateUrl: './list-req.component.html',
  styleUrls: ['./list-req.component.scss'],
})
export class ListReqComponent implements OnInit {
  user: any;
  require: Object;
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

  async openModal(data) {
    const modal = await this.modalController.create({
      component: ListReqDetailComponent,
      componentProps: {
        "req_id": data.req_id,
        "req_area_max": data.req_area_max,
        "req_area_min": data.req_area_min,
        "req_price_max": data.req_price_max,
        "req_price_min": data.req_price_min,
        "req_date": data.req_date,
        "type_name": data.type_name,
        "email_id": data.email_id,
        "type_id": data.type_id,
        "loc_name": data.loc_name,
        "location_id": data.location_id,
        "province_id": data.province_id,
        "provin_name": data.provin_name,
        "zone_id": data.zone_id,
        "zone_name": data.zone_name,
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
