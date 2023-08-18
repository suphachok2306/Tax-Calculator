import { Component, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnChanges {
  @Input() totalVat: any = '';
  @Output() surcharge = new EventEmitter<number>();
  // @Output() surcharge = new EventEmitter<any>();

  //surchargeAmount: any = 0; // กำหนดค่าเริ่มต้นเป็น 0
  surchargeAmount: number | null = null;
  surchargeAmountFormatted: string | null = null;



  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalVat) {
      this.calculateSurcharge();
      this.formatSurchargeAmount();
    }
  }

  formatSurchargeAmount() {
    if (this.surchargeAmount !== null) {
      this.surchargeAmountFormatted = this.addCommas(this.surchargeAmount.toFixed(2) + " THB");
    } else {
      this.surchargeAmountFormatted = null;
    }
  }


  calculateSurcharge() {
    if (this.totalVat) {
      //const totalVatAsNumber = parseFloat(this.totalVat);
      const totalVatAsNumber = parseFloat(this.totalVat.replace(/,/g, ''));

      if (!isNaN(totalVatAsNumber)) {
        this.surchargeAmount = parseFloat((totalVatAsNumber * 0.1).toFixed(2));
        this.surcharge.emit(parseFloat((totalVatAsNumber * 0.1).toFixed(2)));
        //this.surchargeAmountFormatted = this.addCommas(this.surchargeAmount.toString());
      } else {
        console.log("error calculateSurcharge")
        //this.surchargeAmount = "";
        this.surchargeAmount = null;
        this.surcharge.emit(NaN);
      }
    }
  }

  addCommas(num: string) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }




}






