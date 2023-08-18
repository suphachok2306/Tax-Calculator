import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  currentMonth: number = new Date().getMonth() + 1; // เดือนปัจจุบัน
  selectedMonth: string = '';
  //selectedMonth: string | null = null;
  @Output() monthSelected = new EventEmitter<string>();

  months: { value: string, name: string }[] = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  parseInt(value: string): number {
    return parseInt(value, 10);
  }


  onSelectMonth(event: any) {
    const monthValue = event.target.value;
    const selectedMonthName = this.months.find(month => month.value === monthValue)?.name;
    if (selectedMonthName) {
      this.selectedMonth = monthValue;
      this.monthSelected.emit(selectedMonthName); // ส่งชื่อของเดือนไป
    }
  }
  

}
