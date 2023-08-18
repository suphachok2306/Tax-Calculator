import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  years: string[] = [];
  selectedYear: string = '';
  @Output() yearSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let year = 2020; year <= currentYear; year++) {
      this.years.push(year.toString());
    }

  }

  // onSelectYear(event: any) {
  //   const yearValue = event.target.value;
  //   if (yearValue !== this.selectedYear) {
  //     this.selectedYear = yearValue;
  //     this.yearSelected.emit(yearValue);
  //   }
  // }
  //ต้องใช้ == ถึงจะเข้าเงื่อนไข

  onSelectYear(event: any) {
    const yearValue = event.target.value;
    if (yearValue == this.selectedYear) {
      this.selectedYear = yearValue;
      this.yearSelected.emit(yearValue);
    }
  }
  
}
