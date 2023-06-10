import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildApp';
  enterName="Joshua"
  parentData="";
  enterLastName="Poulose"
  parentLastName="";
  value=""

  transferData(){
    this.parentData=this.enterName;
  }
  transferLastName()
  {
    this.parentLastName=this.enterLastName;
  }


  sendData(value: string)
  {
    this.value=value;
  }}
//   sendData()
//   {
//     this.value= this.value }
// }
