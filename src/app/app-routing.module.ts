import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const routes: Routes = [];

@NgModule({
  imports: [BsDatepickerModule.forRoot(), RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
