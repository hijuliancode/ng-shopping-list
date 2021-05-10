import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  id: number = 0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    let item = new Item()

    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    console.log('=> item', item)

    console.log('reset =>');
    
    this.id = 0;
    this.title = '';
    this.price = 0;
    this.quantity = 0;

  }

}
