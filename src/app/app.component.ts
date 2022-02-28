import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment02';
  nameItemCreationStatus = "ไม่มีการเพิ่มรายชื่อ"
  userName = ""
  txtUsename = ""


  onCreatNameItem() {
    this.nameItemCreationStatus = "รายชื่อ "+this.userName+" ได้ถูกเพิ่มเเล้ว"
    this.userName = ""
  }

}
