import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeliveryService } from '../../services/delivery.service';

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
