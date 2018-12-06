import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG } from './app.config';
import { CustomerComponent } from './components/customer/customer.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CustomerService } from './services/customer.service';
import { DeliveryService } from './services/delivery.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DeliveryComponent    
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
     HttpClientModule,
    AppRoutingModule, 
    NgbModule.forRoot()    
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: APP_CONFIG.APP_BASE || '/' },
    DeliveryService,
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
