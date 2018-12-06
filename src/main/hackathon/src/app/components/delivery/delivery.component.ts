import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Trip } from '../../entities/trip';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  inscription: Subscription;
  code: string;

  private trip: Trip = new Trip();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: DeliveryService) { }

  ngOnInit() {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.code = params['id'];

       /* this.service.getTrip(this.code).subscribe((trip: Trip) => {
            this.trip = trip;
        });*/

     
        //TODO criar pagina para nao encontrado
        if (this.trip == null){
            this.router.navigate(['/delivery/NOTFOUND']);
        }
        
      }
    );
  }

  ngOnDestroy(){
    this.inscription.unsubscribe();
  }

}
