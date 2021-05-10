import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items: Item[] = [];

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
      }
    ]
  }

}
