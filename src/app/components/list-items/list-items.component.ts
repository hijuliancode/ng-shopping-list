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
  }

  getItems():void {
    // this.items = this.itemService.getItems();
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal()
    })
  }

  deleteItem(item: Item) {
    // this.items = this.items.filter((x) => x.id !== item.id);
    this.itemService.removeItem(item).subscribe(data => {
      this.items = data;
      this.getTotal();
    });
  }

  toggleItem(item: Item):void {
    this.itemService.toggleItem(item).subscribe()
    this.getTotal()
  }

  getTotal(): void {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.price * item.quantity)
      .reduce( (acc, item) => acc += item, 0)
  }
}
