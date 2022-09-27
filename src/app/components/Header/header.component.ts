import { Component, OnInit } from "@angular/core";
import { CurrencyDataService } from "src/app/currency-data.service"; 

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  usd!: string
  eur!: string

  constructor(private service:CurrencyDataService) {}

  ngOnInit() {
    this.service.calculations('UAH', 'USD', 1)
    .subscribe((response) => {
      this.usd = response.result.toFixed(2)
    })
    this.service.calculations('UAH', 'EUR', 1)
    .subscribe((response) => {
      this.eur = response.result.toFixed(2)
    })
  }

}