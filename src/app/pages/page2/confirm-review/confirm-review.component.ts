import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TemplateRef,ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-confirm-review',
  templateUrl: './confirm-review.component.html',
  styleUrls: ['./confirm-review.component.css']
})
export class ConfirmReviewComponent implements OnInit {
  taxData: any = {}; // สร้าง property taxData เพื่อเก็บข้อมูล
  currentStep: number = 1;

  showAllFields: boolean = false;
  jsonMessage: string = '';


  constructor(private router: Router, private route: ActivatedRoute, private modalService: BsModalService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // รับค่า parameter จาก URL
      this.taxData.filingType = params['filingType'];
      this.taxData.month = params['month'];
      this.taxData.year = params['year'];
      this.taxData.saleAmount = parseFloat(params['saleAmount']);
      this.taxData.taxAmount = parseFloat(params['taxAmount']);
      this.taxData.surcharge = parseFloat(params['surcharge']);
      this.taxData.penalty = parseFloat(params['penalty']);
      this.taxData.totalAmount = parseFloat(params['totalAmount']);
    });
    console.log(this.taxData);

    if (this.taxData.filingType === 'Additional Filing') {
      this.showAllFields = true;
    }
  }


  // confirm() {
  //   this.jsonMessage = JSON.stringify(this.taxData);
  //   this.modalRef = this.modalService.show(this.confirmModal); // เปิด Modal โดยใช้ confirmModal
  // }

  // confirm(): string {
  //   const jsonMessage = JSON.stringify(this.taxData);
  //   return jsonMessage;
  // }

  confirm(){
    const jsonMessage = JSON.stringify(this.taxData);
    alert(jsonMessage);
  }
  
  



  goToHome() {
    this.router.navigate(['/cal-tax']);
  }
}
