import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller.component';
import { TestingComponent } from './testing/testing.component';
import { HomeComponent } from '../shared/home/home.component';
import { MapComponent } from '../shared/map/map.component';
import { SearchComponent } from '../shared/search/search.component';
import { WishlistComponent } from '../shared/wishlist/wishlist.component';
import { MailComponent } from '../shared/mail/mail.component';
import { FavoriteComponent } from '../shared/favorite/favorite.component';


const routes: Routes = [
  {
    path: 'seller',
    component: SellerComponent,
    children: [
      { // หน้าหลัก
        path: 'test',
        component: TestingComponent
      },
      { // 
        path: 'home',
        component: HomeComponent
      },
      { // 
        path: 'map',
        component: MapComponent
      },
      { // 
        path: 'search',
        component: SearchComponent
      },
      { // 
        path: 'wishlist',
        component: WishlistComponent
      },
      { // 
        path: 'mail',
        component: MailComponent
      },
      { // 
        path: 'favorite',
        component: FavoriteComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'seller/test',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
