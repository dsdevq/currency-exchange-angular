import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
 selector: 'app-form',
 templateUrl: './form.component.html',
 styleUrls: ['./form.component.scss']
})

export class FormComponent{
  @Input() select!: string
  @Input() heading!: string
  @Input() amount!: number
  @Output() selectChange = new EventEmitter<string>()
  @Output() amountChange = new EventEmitter<number>()

  handleOnChange(e: any ) {
    this.selectChange.emit(e.target.value)
  }
  handleOnAmountChange(e: any) {
    this.amountChange.emit(e.target.value)
  }
}