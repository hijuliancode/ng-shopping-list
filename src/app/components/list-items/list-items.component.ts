import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(
    private itemService:ItemService
  ) { }

  ngOnInit(): void {
    this.getItems()
    this.getTotal()
  }

  getItems():void {
    this.items = this.itemService.getItems();
  }

  deleteItem(item: Item) {
    console.log('e=>', item)
    // this.items = this.items.filter((x) => x.id !== item.id);
    this.itemService.removeItem(item)
    this.getItems()
    this.getTotal()
  }

  toggleItem(item: Item):void {
    this.getTotal()
  }

  getTotal(): void {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.price * item.quantity)
      .reduce( (acc, item) => acc += item, 0)
  }
}
