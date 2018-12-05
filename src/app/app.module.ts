import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer/customer.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
