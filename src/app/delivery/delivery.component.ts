import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DeliveryService } from './delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  inscription: Subscription;
  code: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: DeliveryService) { }

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
