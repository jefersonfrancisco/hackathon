import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { CustomerService } from './services/customer.service';
import { TripService } from './services/trip.service';


@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,   
    HttpModule,    
    AppRoutingModule, 
    NgbModule.forRoot()    
  ],
  providers: [CustomerService, TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
