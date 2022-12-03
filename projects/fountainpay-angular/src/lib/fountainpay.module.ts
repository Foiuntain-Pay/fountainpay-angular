import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FountainpayComponent } from './fountainpay.component';
import { FountainpayService } from './fountainpay.service';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  
  declarations: [
    FountainpayComponent,
  ],
  exports: [
    FountainpayComponent
  ],
  providers: [FountainpayService]
})
export class FountainpayModule { }
