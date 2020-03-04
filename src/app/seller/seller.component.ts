import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';
import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss'],
})
export class SellerComponent implements OnInit {
  user: any;

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  constructor(
    private menu: MenuController,
    private session: SessionService,
    private route: Router,
    private service: ServerService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);
  }

  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/login'])
  }
 
}
