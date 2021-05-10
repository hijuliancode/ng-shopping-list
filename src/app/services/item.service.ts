import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
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
  ];

  constructor() { }

  getItems():Item[] {
    return this.items;
  }

  addItem(item: Item):void {
    this.items.unshift(item)
  }

  removeItem(item: Item):void {
    this.items = this.items.filter((x) => x.id !== item.id);
  }
}
