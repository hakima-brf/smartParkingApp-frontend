import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})

export class PaiementComponent{
  constructor() {

    render({
      id: "#myPaypalButtons",
      currency: "USD",
      value: "5.00",
      onApprove: (details) => {
        alert("Transaction Sucessfull");

      }
    });
    
   }

  

}
