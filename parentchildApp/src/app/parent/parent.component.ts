import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  dataFromParent: string = 'Hello from Parent';

  sendDataToChild() {
    this.dataFromParent = 'Data sent from Parent';
  }
  dataFromChild: string = '';

  receiveDataFromChild(data: string) {
    this.dataFromChild = data;
  }
}
