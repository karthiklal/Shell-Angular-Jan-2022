import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productNames : string[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onBtnAddNewClick(newProductName : string){
    this.productNames.push(newProductName);
  }

  onBtnRemoveClick(productName : string){
    this.productNames.splice(this.productNames.indexOf(productName), 1);
  }
}
