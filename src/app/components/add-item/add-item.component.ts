import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';

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

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let newItem = new Item()

    newItem.id = this.id;
    newItem.title = this.title;
    newItem.price = this.price;
    newItem.quantity = this.quantity;
    newItem.completed = false;

    console.log('=> item', newItem)

    this.itemService.addItem(newItem)
    this.router.navigate(['/'])
  }

}
