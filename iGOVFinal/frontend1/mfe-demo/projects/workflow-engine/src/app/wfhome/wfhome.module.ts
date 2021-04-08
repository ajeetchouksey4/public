import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WfhomeComponent } from './wfhome.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkService } from '../work.service';



@NgModule({
  declarations: [WfhomeComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: WfhomeComponent,
      },
    ]),
  ],
  exports: [
    WfhomeComponent
  ],
  providers: [WorkService]
})
export class WFHomeModule { }
