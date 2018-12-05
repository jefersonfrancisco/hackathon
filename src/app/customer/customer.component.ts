import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  inscription: Subscription;
  code: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CustomerService) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.code = params['id'];
        
      }
    );
  }

  ngOnDestroy(){
    this.inscription.unsubscribe();
  }

}
