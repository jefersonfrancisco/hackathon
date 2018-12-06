import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './components/customer/customer.component';
import { DeliveryComponent } from './components/delivery/delivery.component';


const routes: Routes = [
  { path: 'delivery/:id', component: DeliveryComponent },
  { path: 'customer/:id', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
