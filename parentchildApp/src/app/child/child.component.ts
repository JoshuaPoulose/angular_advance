import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childData: any;

  @Output() childEvent = new EventEmitter<string>();

  sendDataToParent() {
    const dataToSend = 'Data sent from Child';
    this.childEvent.emit(dataToSend);
  }
}
