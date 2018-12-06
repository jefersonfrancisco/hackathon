import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './components/customer/customer.component';
import { DeliveryComponent } from './components/delivery/delivery.component';

const APP_ROUTES: Routes = [
    { path: 'delivery/:id', component: DeliveryComponent },
    { path: 'customer/:id', component: CustomerComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);