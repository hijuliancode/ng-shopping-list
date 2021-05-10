import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { AddItemComponent } from './components/add-item/add-item.component';

const routes: Routes = [
  {
    path: '',
    component: ListItemsComponent
  },
  {
    path: 'add',
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
