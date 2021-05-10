import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: Item):void {
    this.deleteItem.emit(item)
  }

  onToggle(item: Item):void {
    this.item.completed = !item.completed;
  }

}
