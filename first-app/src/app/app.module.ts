import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { SalaryCalculatorModel } from './salary-calculator/salary-calculator-model';
import { SalaryCalculatorModelV2 } from './salary-calculator/salary-calculator-model-v2';

@NgModule({
  /* register all UI entities (components, directives, & pipes) */
  declarations: [
    AppComponent,
    GreeterComponent,
    SpinnerComponent,
    CalculatorComponent,
    ProductsComponent,
    SalaryCalculatorComponent
    
  ],
  /* register other dependent modules */
  imports: [
    BrowserModule
  ],
  /* register all non-ui entites (services) */
  providers: [
    SalaryCalculatorModel
    /* { provide: SalaryCalculatorModel, useClass: SalaryCalculatorModel } */
    /* { provide: SalaryCalculatorModel, useClass: SalaryCalculatorModelV2 } */
    /* { provide: SalaryCalculatorModel, useFactory : salaryCalculatorModelFactory } */
    /* { provide: SalaryCalculatorModel, useValue : new SalaryCalculatorModelV2() } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


function salaryCalculatorModelFactory() : SalaryCalculatorModel {
    return new SalaryCalculatorModelV2();
}