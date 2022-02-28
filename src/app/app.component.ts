import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment02';
  nameId: number = 1;
  nameStatus: string = 'Available';
  allowAddName = false;
  nameItemCreationStatus = "ไม่มีการเพิ่มรายชื่อ"
  userName = ""

  constructor() {
    setTimeout( () => {this.allowAddName = true },3000);
  }

  getNameStatus() {
    return this.nameStatus;
  }

  onCreatNameItem() {
    this.nameItemCreationStatus = "รายชื่อได้ถูกเพิ่มเเล้ว"
  }

  onUpadateNameItem(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }
}
