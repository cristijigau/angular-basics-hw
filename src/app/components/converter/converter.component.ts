import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  firstCurrency: string = 'MDL';
  secondCurrency: string = 'USD';

  firstInput: number = 0;
  secondInput: number = 0;

  fromRate: number = 17.62;
  toRate: number = 1 / this.fromRate;

  errorMessage:string = 'Value should not be 0';

  constructor() {}

  ngOnInit(): void {}

  convertCurrency() {
    this.secondInput =
      Math.round((this.firstInput * this.toRate + Number.EPSILON) * 100) / 100;
  }

  resetValues() {
    this.firstInput = 0;
    this.secondInput = 0;
  }

  swapValues() {
    this.fromRate = this.toRate;
    this.toRate = 1 / this.fromRate;
    const currency = this.firstCurrency;
    this.firstCurrency = this.secondCurrency;
    this.secondCurrency = currency;
  }
}
