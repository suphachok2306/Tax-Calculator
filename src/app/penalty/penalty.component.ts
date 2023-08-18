import { Component, OnInit, Output, EventEmitter,Input} from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  //penalty : number = 200;
  // @Output() penaltyValue = new EventEmitter<number>();
  @Input() penalty: number = 0; // รับค่า Penalty มาจาก AppComponent
  @Output() penaltyChanged = new EventEmitter<number>(); // สร้าง EventEmitter สำหรับส่งข้อมูล

  constructor() { }


  ngOnInit(): void {
    this.updatePenalty(this.penalty);
  }


  updatePenalty(newPenalty: number) {
    this.penalty = parseFloat(newPenalty.toFixed(2));
    this.penaltyChanged.emit(this.penalty);
  }
  
  

}
