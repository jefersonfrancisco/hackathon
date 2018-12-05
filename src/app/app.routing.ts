import { Routes, RouterModule } from "@angular/router";
import { DeliveryComponent } from './delivery/delivery.component';
import { CustomerComponent } from './customer/customer.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: 'delivery/:id', component: DeliveryComponent },
    { path: 'customer/:id', component: CustomerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);