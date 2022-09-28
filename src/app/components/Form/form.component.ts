import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
 selector: 'app-form',
 templateUrl: './form.component.html',
 styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
  @Input() select!: string
  @Input() heading!: string
  @Input() amount!: number
  @Output() selectChange = new EventEmitter<string>()
  @Output() amountChange = new EventEmitter<number>()

  number = new FormControl(0)

  ngOnInit(): void {
    this.number.valueChanges.subscribe(value => {
      if (value !== null && value > 0) {
        this.handleOnAmountChange(value)
      }
      else this.handleOnAmountChange(0)
    })
  }
  handleOnChange(e: any ) {
    this.selectChange.emit(e.target.value)
  }
  handleOnAmountChange(e: any) {
    this.amountChange.emit(e)
  }
}