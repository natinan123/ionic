import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';
import { ModalController, NavParams, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-pro-location',
  templateUrl: './pro-location.component.html',
  styleUrls: ['./pro-location.component.scss'],
})
export class ProLocationComponent implements OnInit {
  latitude: any;
  longtitude: any;
  height = 0;

  constructor(
    private service: ServerService,
    private session: SessionService,
    private modalController: ModalController,
    private navParams: NavParams,
    public navCtrl: NavController,
    private platform: Platform
  ) {
    console.log(platform.height());
    this.height = platform.height() - 15;
  }

  ngOnInit() {
    this.latitude = this.navParams.data.latitude;
    this.longtitude = this.navParams.data.longtitude;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }



}
