import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  newItem: string = '';

  @Output() addItem = new EventEmitter<string>();

  onAddItem() {
    if (this.newItem.trim() !== '') {
      this.addItem.emit(this.newItem);
      this.newItem = '';
    }
  }

}