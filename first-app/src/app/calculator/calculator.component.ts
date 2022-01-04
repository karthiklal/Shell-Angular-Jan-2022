import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  n1 : number = 0;
  n2 : number = 0;
  operation : string = '';
  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  setN1(val : string){
    this.n1 = parseInt(val);
  }

  setN2(val : string){
    this.n2 = parseInt(val);
  }

  onBtnCalculateClick(){
    switch (this.operation) {
      case 'add':
        this.result = this.n1 + this.n2
        break;
      case 'subtract':
        this.result = this.n1 - this.n2
        break;
      case 'multiply':
        this.result = this.n1 * this.n2
        break;
      case 'divide':
        this.result = this.n1 / this.n2
        break;
    
      default:
        break;
    }
  }
}
