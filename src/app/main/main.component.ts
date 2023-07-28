import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../models/item.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor() {}

  @Input('itemList')
  itemList!: Item[];

  @Output() newItemEvent = new EventEmitter<number>();
  delete(value: number) {
    this.newItemEvent.emit(value);
  }
}
