import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  saleAmount: string = '';
  totalVat: any = '';

  @Output() totalVatChanged = new EventEmitter<any>();
  @Output() saleAmountChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  calculateTotalVat() {
    if (this.saleAmount) {
      const saleAmountNum = parseFloat(this.saleAmount.replace(/,/g, ''));
      const vat = saleAmountNum * 0.07;
      this.totalVat = vat;
      const vatAddCommas = this.addCommas(vat.toFixed(2));
      this.totalVatChanged.emit(vatAddCommas + " THB");

      this.saleAmount = saleAmountNum.toFixed(2);
      this.saleAmountChanged.emit(this.saleAmount);
      this.saleAmount = this.addCommas(this.saleAmount);
      this.saleAmount = this.saleAmount + " THB"
      // this.saleAmountChanged.emit(this.saleAmount);
    }
  }

  formatInput() {
    this.saleAmount = this.saleAmount.replace(/,/g, '');
  }

  // formatInput() {
  //   const saleAmountAsNumber = parseFloat(this.saleAmount);
  //   if (!isNaN(saleAmountAsNumber)) {
  //     this.totalVat = parseFloat(this.totalVat.replace(/,/g, ''));
  //     //this.updateTaxAmount(this.totalVat);
  //     console.log("error formatInput tax-amount");
  //   }else {
  //     //this.totalVat = "";
  //     //this.totalVat.emit(NaN);
  //   }
  // }

  addCommas(num: string) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

}
