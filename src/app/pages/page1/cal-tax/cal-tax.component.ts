import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cal-tax',
  templateUrl: './cal-tax.component.html',
  styleUrls: ['./cal-tax.component.css']
})
export class CalTaxComponent implements OnInit {

  constructor(private router: Router) { } // กำหนด private router ใน constructor

  ngOnInit(): void {
  }
  currentStep: number = 0;

  totalVat: number | null = null;
  filingType: string = 'Ordinary Filing';
  surcharge: number = 0;
  penalty: number = 200;
  selectedMonth: string = '';
  selectedYear: string = '';
  totalAmount: number | null = null;
  saleAmount: number | null = null;



  updatePenalty(penalty: number) {
    this.penalty = penalty;
  }

  // updatePenalty(penalty: number) {
  //   this.penalty =  parseFloat(penalty.toFixed(2));
  //   this.penalty = this.penalty + ' THB';
  // }
  

  updateSaleAmount(newSaleAmount: number) {
    this.saleAmount = newSaleAmount;
  }
  
  updateSurcharge(surcharge: number) {
    this.surcharge = surcharge;
    // this.surcharge = +surcharge.toFixed(2) ;
  }



  updateTotalVat(totalVat: number) {
    this.totalVat = totalVat;
  }

  
  onFilingTypeChanged(filingType: string) {
    this.filingType = filingType;
    this.updateTotalVat(0); // Reset totalVat to 0 when filingType changes
  }

  // updateSelectedMonth(selectedMonth: string) {
  //   this.selectedMonth = selectedMonth;
  // }

  // updateSelectedYear(selectedYear: string) {
  //   this.selectedYear = selectedYear;
  // }

  updateSelectedMonth(selectedMonth: string) {
    console.log('Selected month:', selectedMonth);
    this.selectedMonth = selectedMonth;
  }
  
  updateSelectedYear(selectedYear: string) {
    console.log('Selected year:', selectedYear);
    this.selectedYear = selectedYear;
  }
  
  

  updateTotalAmount(totalAmount: number | null) {
    this.totalAmount = totalAmount;
    console.log("error updateTotalAmount at caltax.ts ");
    // ทำสิ่งที่คุณต้องการกับค่า totalAmount ที่ได้รับมา
  }

  goToConfirmReview() {
    const queryParams = {
      filingType: this.filingType,
      month: this.selectedMonth,
      year: this.selectedYear,
      saleAmount: this.saleAmount,
      taxAmount: this.totalVat,
      surcharge: this.surcharge,
      penalty: this.penalty,
      totalAmount: this.totalAmount
    };

    this.router.navigate(['/confirm-review'], { queryParams: queryParams });
  }


}
