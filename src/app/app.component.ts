import { Component } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tax12';

  //constructor(private router: Router) {}

  // goToNextPage() {
  //   // ไปยังหน้าถัดไป
  //   this.router.navigate(['/confirm-review']); // แก้ไขเส้นทางตามที่คุณต้องการ
  // }

  //totalVat: number = 0;
  //totalVat: number | null = null;

  //totalVat : any = '';
  // totalVat: number | null = null;
  // filingType: string = 'ordinary';
  // surcharge: number = 0;
  // penalty: number = 200;
  // //selectedMonth: string | null = null;
  // selectedMonth: string = '';
  // selectedYear: string = '';

  // updateSurcharge(surcharge: number) {
  //   this.surcharge = surcharge;
  // }

  // updateTotalVat(totalVat: number) {
  //   this.totalVat = totalVat;
  // }

  // onFilingTypeChanged(filingType: string) {
  //   this.filingType = filingType;
  //   this.updateTotalVat(0); // Reset totalVat to 0 when filingType changes
  // }

  // updateSelectedMonth(selectedMonth: string) {
  //   this.selectedMonth = selectedMonth;
  // }
}
