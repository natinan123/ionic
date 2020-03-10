import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from '@ionic/angular';
import { ServerService } from 'src/app/@service/server.service';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  modalTitle: string;
  modelId: number;
  Member: Object;
  user: any;

  constructor(
    private service: ServerService,
    private session: SessionService,
    private modalController: ModalController,
    private navParams: NavParams,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    // console.table(this.navParams);
    // this.modelId = this.navParams.data.paramID;
    // this.modalTitle = this.navParams.data.paramTitle;
    // this.onSearchUser()
    // this.getTableMember();
    // this.setFilteredItems();
  }

  // async closeModal() {
  //   const onClosedData: string = "Wrapped Up!";
  //   await this.modalController.dismiss(onClosedData);
  // }

  // getTableMember() {
  //   this.service.getMember().subscribe(
  //     (res) => {
  //       console.table(res);
  //       this.user = res
  //     }
  //   )
  // }


  // setFilteredItems() {

  //   this.user.filter((item) => {
  //     return item.name.toLowerCase().includes();
  //   });
  //   this.user = this.data.filterItems(this.searchTerm);

  //   return this.user.filter((item) => {
  //     return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  // }); 
  // }

  //ค้นหาผู้ติดต่อ
  onSearchUser() {
    const data = this.modelId;
    console.table(data);
    this.service.getSearchUser(data).subscribe(
      (res) => {
        console.log(res);
        this.Member = res;

      })
  }
}
