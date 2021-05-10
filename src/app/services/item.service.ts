import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url:string = 'http://localhost:3001/items'
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

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

  constructor(
    private http:HttpClient,
  ) { }

  getItems():Observable<Item[]> {
    // return this.items;
    return this.http.get<Item[]>(this.url);
  }

  addItem(item: Item):Observable<Item> {
    // this.items.unshift(item)
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  removeItem(item: Item):Observable<Item[]> {
    return this.http.delete<Item[]>(`${this.url}/${item.id}`);
  }

  toggleItem(item: Item):Observable<Item> {
    return this.http.put<Item>(`${this.url}/${item.id}`, item, this.httpOptions);
  }
}
