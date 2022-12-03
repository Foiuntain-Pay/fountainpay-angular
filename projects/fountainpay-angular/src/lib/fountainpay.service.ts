
import { Injectable } from '@angular/core';
import { FPCheckout } from './fpCheckout';
import { FpcheckoutProps, FpcheckoutResponse, ScriptStatusInterface } from './types';

@Injectable({
  providedIn: 'root'
})
export class FountainpayService {
    public loadStatus: ScriptStatusInterface;
    private fpService: FPCheckout;
    
    constructor(){
      this.fpService=new FPCheckout()
      this.loadStatus=this.fpService.status;
    }

    public payWithFountainpay(FpcheckoutConfig: FpcheckoutProps):void{
      
      if(!FpcheckoutConfig.amount)  throw new Error('Unable to load fountainpay payment modal');
      if (this.loadStatus.error) throw new Error('Unable to load fountainpay payment modal');
      
      if (this.loadStatus.loaded) {
        
        const FpcheckoutArgs: FpcheckoutProps = {
          ...FpcheckoutConfig,
          amount: FpcheckoutConfig.amount ?? 0,
          channels: FpcheckoutConfig?.channels ?? ["card", "qrcode", "directDebit"],
          callback: (response: FpcheckoutResponse | any) => {
              FpcheckoutConfig.callback!(response);
            },
          close: () => {
            FpcheckoutConfig.close!();
          },
        }
        return (
          // @ts-ignore
          window.Fountainpay &&
          // @ts-ignore
          
          window.Fountainpay.setup(FpcheckoutArgs)
        );
      }
    }
}