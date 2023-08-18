import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CalTaxComponent } from './pages/page1/cal-tax/cal-tax.component';
import { ConfirmReviewComponent } from './pages/page2/confirm-review/confirm-review.component';




// const routes: Routes = [
//   { path: 'CalTaxComponent', component: CalTaxComponent },
//   { path: 'CalTaxComponent-review', component: CalTaxComponent }
// ];
const routes: Routes = [
  { path: '', redirectTo: '/cal-tax', pathMatch: 'full' }, // เส้นทางหน้าแรก
  { path: 'cal-tax', component: CalTaxComponent }, // เส้นทางไปหน้า cal-tax
  { path: 'confirm-review', component: ConfirmReviewComponent } // เส้นทางไปหน้า confirm-review
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
