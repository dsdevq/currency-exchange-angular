import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
export interface IExchange {
  result: number
}

@Injectable({
  providedIn: 'root'
})


export class CurrencyDataService {
  
  constructor(private http: HttpClient) {}
  
   calculations(to: String, from: String, amount: Number){
    return this.http.get<IExchange>(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`)
  }
}
