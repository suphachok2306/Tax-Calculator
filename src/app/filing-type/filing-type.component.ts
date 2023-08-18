import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  @Output() filingTypeChanged = new EventEmitter<string>();
  filingType: string = 'Ordinary Filing'; // ค่าเริ่มต้นเป็น "Ordinary Filing"

  constructor() { }

  ngOnInit(): void {
    this.changeFilingType('Ordinary Filing'); // กำหนดให้ Type of filing ถูกเลือกตามค่าเริ่มต้น
  }

  changeFilingType(type: string) {
    this.filingType = type;
    this.filingTypeChanged.emit(this.filingType);
  }
}
