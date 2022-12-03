import { Component } from '@angular/core';
import { FpcheckoutResponse } from 'projects/fountainpay-angular/src/lib/types';
import {FountainpayService} from "../../../fountainpay-angular/src/lib/fountainpay.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public config: any
  constructor(private fpService: FountainpayService) {
  }
  ngOnInit() {
    this.config={
      publicKey: "FP-PUBK-9603605594851666993306925",
      tnxRef: `${Date.now()}`,
      amount: 1000,
      currency: 'NGN',
      channels: ["card", "qrcode", "directDebit"],
      customer: {
        email: 'user@gmail.com',
        phoneNo: '08102909304',
        lastname: 'test',
        firstname:'user'
      },
    };
  }
  public onPayment(response: any){
    console.log(response)
  }
  public onClose(){
    alert("window close")
  }
  public innitializePayment(): void {
    const newconfig = {
    ...this.config,
      callback: (response: FpcheckoutResponse | any) => {
        this.onPayment!(response);
      },
      close: () => {
        this.onClose!();
      },
    };
    console.log(this.config)
    this.fpService.payWithFountainpay(newconfig as any);
  }

}
