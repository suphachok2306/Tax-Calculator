import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilingTypeComponent } from './filing-type/filing-type.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';
import { SaleAmountComponent } from './sale-amount/sale-amount.component';
import { TaxAmountComponent } from './tax-amount/tax-amount.component';
import { SurchargeComponent } from './surcharge/surcharge.component';
import { PenaltyComponent } from './penalty/penalty.component';
import { TotalAmountComponent } from './total-amount/total-amount.component';

import { FormsModule } from '@angular/forms';
import { ConfirmReviewComponent } from './pages/page2/confirm-review/confirm-review.component';
import { CalTaxComponent } from './pages/page1/cal-tax/cal-tax.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    ConfirmReviewComponent,
    CalTaxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
