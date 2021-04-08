import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WfhomeComponent } from './wfhome/wfhome.component';
import { WFHomeModule } from './wfhome/wfhome.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { WorkService } from './work.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    WFHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
