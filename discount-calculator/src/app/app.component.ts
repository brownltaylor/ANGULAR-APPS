import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Discount Calculator';

  
  totalBill: number; 
  tip: number; 
  total: number; 
  tipAmount: number;
  tipPercentage: number;

  calculateTip(){ 
    this.tipPercentage = this.tip / 100;
    
   
    this.tipAmount = this.totalBill * this.tipPercentage;
  
    this.total = this.tipAmount + this.totalBill;
   
     
  }
}
