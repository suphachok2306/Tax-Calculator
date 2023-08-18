import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnChanges {
  @Input() totalVat: number | string = 0;
  @Input() surcharge: number = 0;
  @Input() penalty: number = 0;

  @Output() totalAmountChanged = new EventEmitter<number>();

  totalAmount: number | null = null;
  totalAmountFormatted: string | null = null;
  //totalAmount: any = '0.00 THB'

  ngOnChanges(changes: SimpleChanges) {
    this.calculateTotalAmount();
    this.formatTotalAmount();
  }
  
  formatTotalAmount() {
    if (this.totalAmount !== null) {
      this.totalAmountFormatted = this.addCommas(this.totalAmount.toFixed(2)) + " THB";
    } else {
      this.totalAmountFormatted = null;
    }
  }
  

  private parseValue(value: string): number {
    //console.log(parseFloat(value.replace(/,/g, '')));
    return parseFloat(value.replace(/,/g, ''));

  }

  calculateTotalAmount() {
    console.log(this.totalVat);
    console.log(this.totalVat.toString());
    const totalVatAsNumber = this.parseValue(this.totalVat.toString());
    const surchargeAsNumber = this.parseValue(this.surcharge.toString());
    const penaltyAsNumber = this.parseValue(this.penalty.toString());

    if (!isNaN(totalVatAsNumber) && !isNaN(surchargeAsNumber) && !isNaN(penaltyAsNumber)) {
      this.totalAmount = totalVatAsNumber + surchargeAsNumber + penaltyAsNumber;
      this.totalAmountChanged.emit(this.totalAmount);

    } else {
      this.totalAmount = null;
      this.totalAmountChanged.emit(undefined); // ส่งค่า null ถ้าไม่สามารถคำนวณได้
      console.log("error undefined calculateTotalAmount at total-amount")
    }
  }

  addCommas(num: string) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }


}






