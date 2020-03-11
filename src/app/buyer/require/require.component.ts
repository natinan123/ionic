import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-require',
  templateUrl: './require.component.html',
  styleUrls: ['./require.component.scss'],
})
export class RequireComponent implements OnInit {
  public rangePrice = { lower: 55, upper: 65 };
  public rangeArea = { lower: 55, upper: 65 };



  public addReq = new FormGroup({
    Type_id: new FormControl(''),
    Zone_id: new FormControl(''),
    Province_id: new FormControl(''),
    Location_id: new FormControl(''),
    rangePrice: new FormControl(''),
    rangeArea: new FormControl(''),

  })
  user: any;
  types: Object;
  zones: Object;
  provins: Object;
  district: Object;
  Type_id: any;
  province_id: any;
  location_id: any;




  constructor(
    private session: SessionService,
    private service: ServerService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.getType();
    this.getZonePro();
  }

  // ประเภท
  getType() {
    this.service.getType().subscribe(
      (res) => {
        // console.log(res);
        this.types = res;
      }
    )
  }
  // ภาค
  getZonePro() {
    this.service.getZone().subscribe(
      (res) => {
        // console.log(res);
        this.zones = res;
      }
    )
  }
  // จังหวัด
  onProvince(zone_id) {
    this.service.getProvince(zone_id).subscribe(
      (res) => {
        // console.log(res);
        this.provins = res;
      })
  }
  // เขต
  onLocation(province_id) {
    console.log(province_id);
    this.service.getLocOfPro(province_id).subscribe(
      (res) => {
        // console.log(res);
        this.district = res;
      })
  }
  onCheck() {
    const data = {
      type_id: this.Type_id,
      province_id: this.province_id,
      location_id: this.location_id,
      req_area_max: this.rangeArea.upper,
      req_area_min: this.rangeArea.lower,
      req_price_max: this.rangePrice.upper,
      req_price_min: this.rangePrice.lower,
      email_id: this.user[0].email_id
    }

    this.service.postRequire(data).subscribe(
      async (res) => {
      }
    )
  }

}
