import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
