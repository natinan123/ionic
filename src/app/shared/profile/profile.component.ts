import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  user: any;
  email_id: any;
  fname: any;
  lname: any;
  phone: any;
  id_line: any;
  facebook: any;
  cus_detail: any;
  profile_pic: any;
  status: any;
  link: string;

  constructor(
    private session: SessionService,
    private service: ServerService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);
    this.getProfile();

    
    this.status = this.user[0].cus_status;
    if (this.user[0].cus_status == null || this.user[0].cus_status == "") {
      this.link = '/mainpage/mainpage/edit_profile';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/edit_profile';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/edit_profile';
    }
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/edit_profile';
    }
  }


  getProfile() {
    this.service.getProfile(this.user[0].email_id).subscribe(
      (res) => {
        console.log(res);
        this.email_id = res[0].email_id;
        this.fname = res[0].fname;
        this.lname = res[0].lname;
        this.phone = res[0].phone;
        this.id_line = res[0].id_line;
        this.facebook = res[0].facebook;
 
        this.cus_detail = res[0].cus_detail;
        this.profile_pic = res[0].profile_pic;

      }
    )

  }
}
