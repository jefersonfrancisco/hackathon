import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeliveryComponent } from './delivery/delivery.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: 'delivery/:id', component: DeliveryComponent },
  { path: 'customer/:id', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
