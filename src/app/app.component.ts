import { Component, OnInit } from '@angular/core';
import { CurrencyDataService } from './currency-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'currency-exchange';
  to = 'EUR'
  from = 'UAH'
  toAmount!: number
  fromAmount!: number
  amountFrom = false

  constructor(private service: CurrencyDataService){}

  handleTo(el: string) {
    this.to = el
    this.amountFrom = false
    this.service.calculations(this.from, this.to, this.toAmount)
    .subscribe(response => {
        this.fromAmount = +response.result.toFixed(2)
    })
  }

  handleFrom(el: string) {
    this.from = el
    this.amountFrom = true
    this.service.calculations(this.to, this.from, this.fromAmount)
    .subscribe(response => {
      this.toAmount = +response.result.toFixed(2)
    })
  }
  
  handleAmountFrom(el : number) {
    this.fromAmount = el
    this.amountFrom = true
    this.service.calculations(this.to, this.from, this.fromAmount)
    .subscribe(response => {
      if (response.result && response.result > 0) {
      this.toAmount = +response.result.toFixed(2)
      }
      else this.toAmount = 0
    })
  }

  handleAmountTo(el : number) {
    this.toAmount = el
    this.amountFrom = false
    this.service.calculations(this.from, this.to, this.toAmount)
    .subscribe(response => {
      if (response.result && response.result > 0) {
      this.fromAmount = +response.result.toFixed(2)
      }
      else this.fromAmount = 0
    })
  }

}
