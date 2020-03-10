import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MailComponent } from './mail/mail.component';
import { ProDetailComponent } from './pro-detail/pro-detail.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { MessageComponent } from './message/message.component';
import { ListUserComponent } from './mail/list-user/list-user.component';
import { ProLocationComponent } from './pro-detail/pro-location/pro-location.component';


const routes: Routes = [
  {
    path: 'shared',
    children: [
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
        path: 'message/:descination',
        component: MessageComponent
      },
      { // 
        path: 'favorite',
        component: FavoriteComponent
      },
      { // 
        path: 'prodetail/:pro_id',
        component: ProDetailComponent
      },
      { // ที่ตั้ง
        path: 'pro_location',
        component: ProLocationComponent
      },
      { // 
        path: 'profile',
        component: ProfileComponent
      },
      { // 
        path: 'edit_profile',
        component: EditProfileComponent
      },
      { // รายชื่อแชท
        path: 'list_user',
        component: ListUserComponent
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
