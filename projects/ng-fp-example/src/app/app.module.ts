import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FountainpayModule } from 'fountainpay-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FountainpayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
