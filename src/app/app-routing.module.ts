import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

const routes: Routes = [
  {
    path:"" , component :LoanCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
