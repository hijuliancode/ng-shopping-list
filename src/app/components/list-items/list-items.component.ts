import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        title: 'Manzana',
        price: 1.5,
        quantity: 4,
        completed: false,
      },
      {
        id: 1,
        title: 'Pan',
        price: 0.5,
        quantity: 8,
        completed: true,
      },
      {
        id: 2,
        title: 'Pera',
        price: 2.5,
        quantity: 6,
        completed: false,
      },
      {
        id: 3,
        title: 'Platano',
        price: 1.4,
        quantity: 1,
        completed: true,
      },
      {
        id: 4,
        title: 'Durazno',
        price: 5.5,
        quantity: 3,
        completed: false,
      },
      {
        id: 5,
        title: 'Coco',
        price: 10.5,
        quantity: 10,
        completed: false,
      },
    ]

    this.getTotal()
  }

  deleteItem(item: Item) {
    console.log('e=>', item)
    this.items = this.items.filter((x) => x.id !== item.id);
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
