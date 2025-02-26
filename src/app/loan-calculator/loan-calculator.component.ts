import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent {
  loanAmount = 1000000; 
  loanPeriod = 6;
  estimatedAmount = "1,66,666.666";

  onSliderChange() {
    this.estimatedAmount = (this.loanAmount / this.loanPeriod).toString();
    this.estimatedAmount = Number(this.estimatedAmount).toFixed(3);
  }

  console(){
    console.log(`EstimatedAmount = ${this.estimatedAmount}` ,`Loan Period = ${this.loanPeriod}`, `Loan Amount = ${this.loanAmount}`);
    
  }
}
