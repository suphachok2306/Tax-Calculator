import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {
  taxAmount: string = '';
  @Input() totalVat: any = '';
  @Output() taxAmountChanged = new EventEmitter<number>();
  readonly VAT_RANGE = 20.00;

  originalTotalVat: number | null = null;

  constructor() { }

  ngOnInit(): void {

  }


  //แบบพิมพ์ ',' ในfield แล้วไม่ลบ ***มีบัคครั้งแรกที่ใส่ ',' ต้องกด ',' ซ้ำ2รอบ ถึงจะขึ้น
  // formatInput() {
  //   const totalVatAsNumber = parseFloat(this.totalVat);
  //   if (!isNaN(totalVatAsNumber)) {
  //     this.totalVat = parseFloat(this.totalVat.replace(/,/g, ''));
  //     this.updateTaxAmount(this.totalVat);
  //     console.log("error formatInput tax-amount");
  //   }else {
  //     //this.totalVat = "";
  //     //this.totalVat.emit(NaN);
  //   }
  // }

  //แบบพิมพ์ ',' ในfield แล้วลบทันที
  formatInput() {
    this.totalVat = this.totalVat.replace(/,/g, '');
    const totalVatAsNumber = parseFloat(this.totalVat.replace(/,/g, ''));
    if (!this.originalTotalVat) {
      this.originalTotalVat = totalVatAsNumber; // เก็บค่าก่อนแก้ไข
      console.log("ค่าก่อนแก้ "+this.originalTotalVat);
    }

    // ตรวจสอบช่วง +-20
    if (totalVatAsNumber > this.originalTotalVat + 20 || totalVatAsNumber < this.originalTotalVat - 20) {
      alert('Invalid Tax : Total VAT is out of range (+-20)');
      this.totalVat = this.originalTotalVat.toFixed(2); // กลับเป็นค่าเดิม
      return;
    }
  }

  // formatInputWhenBlur() {
  //   const totalVatAsNumber = parseFloat(this.totalVat);
  //   if (!isNaN(totalVatAsNumber)) {
  //     this.totalVat = parseFloat(this.totalVat.replace(/,/g, ''));
  //     this.totalVat = totalVatAsNumber.toFixed(2);
  //     this.updateTaxAmount(this.totalVat);
  //   }else {
  //     //this.totalVat = "";
  //     //this.totalVat.emit(NaN);
  //   }
  // }

  formatInputWhenBlur() {
    const totalVatAsNumber = parseFloat(this.totalVat.replace(/,/g, '')); // เอา , ออกก่อนที่จะแปลงเป็นเลข
    if (!isNaN(totalVatAsNumber)) {
      // if (!this.originalTotalVat) {
      //   this.originalTotalVat = totalVatAsNumber; // เก็บค่าเริ่มต้นเมื่อครั้งแรก
      //   console.log("ค่าก่อนแก้ "+this.originalTotalVat);
      // }
  
      // // ตรวจสอบช่วง +-20
      // if (totalVatAsNumber > this.originalTotalVat + 20 || totalVatAsNumber < this.originalTotalVat - 20) {
      //   alert('Total VAT is out of range (+-20)');
      //   this.totalVat = this.originalTotalVat.toFixed(2); // กลับเป็นค่าเดิม
      //   return;
      // }
      this.formatInput();
  
      this.totalVat = totalVatAsNumber.toFixed(2);
      this.updateTaxAmount(this.totalVat);
    }
  }
  




  formatOutput() {
    const totalVatAsNumber = parseFloat(this.totalVat);
    if (!isNaN(totalVatAsNumber)) {
  
      /*this.totalVat = this.addCommas(this.totalVat.toFixed(2));
      this.totalVat = this.totalVat + " THB";*/
      this.totalVat = this.addCommas(totalVatAsNumber.toFixed(2)) + " THB";
      this.updateTaxAmount(this.totalVat);

    } else {
      //this.totalVat = "";
      //this.totalVat.emit(NaN);
    }
  }


  addCommas(num: string) {
    const parts = num.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }


  updateTaxAmount(newTaxAmount: string) {
    this.taxAmount = newTaxAmount;
    //this.formatInput();
    this.taxAmountChanged.emit(this.totalVat);
  }



}



