import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CurrencyDataService } from './currency-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items:any[] = []
  title = 'currency-exchange';
  options = []
  to = 'EUR'
  from = 'UAH'
  toAmount = 1
  fromAmount = 1
  amountFrom = false

  constructor(private service: CurrencyDataService){}

  ngOnInit(): void {
    this.service.calculations(this.from, this.to, this.toAmount)
    .subscribe(response => {
      this.fromAmount = +response.result.toFixed(2)
    })
  }

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
      this.toAmount = +response.result.toFixed(2)
    })
  }

  handleAmountTo(el : number) {
    this.toAmount = el
    this.amountFrom = false
    this.service.calculations(this.from, this.to, this.toAmount)
    .subscribe(response => {
      this.fromAmount = +response.result.toFixed(2)
    })
  }

}
