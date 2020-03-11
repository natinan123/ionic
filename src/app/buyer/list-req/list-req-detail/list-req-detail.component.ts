import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ModalController, NavParams, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-list-req-detail',
  templateUrl: './list-req-detail.component.html',
  styleUrls: ['./list-req-detail.component.scss'],
})
export class ListReqDetailComponent implements OnInit {

  data: { [key: string]: any; };


  constructor(
    private service: ServerService,
    private session: SessionService,
    private modalController: ModalController,
    private navParams: NavParams,
    public navCtrl: NavController,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.data = this.navParams.data;
    console.log(this.data);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  onDeleteLReq() {
    this.service.deleteReq(this.data.req_id).subscribe(
      async (res) => {
      

      }
    )
  }

}
