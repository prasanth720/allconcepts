import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';

import { AllEmpDataComponent} from './all-emp-data/all-emp-data.component';
import { LayoutComponent } from './layout/layout.component';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    AllEmpDataComponent,
    BodyComponent,
    LayoutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    TableModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
   
    CardModule
  ],
  providers: [TestService],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
