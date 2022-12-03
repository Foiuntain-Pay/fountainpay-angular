import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FpcheckoutConfig, FpcheckoutProps, FpcheckoutResponse, InitializeFpcheckoutPayment } from './types';
import { FountainpayService } from './fountainpay.service';

@Component({
  selector: 'fountainpay',
  template: `
    <button (click)="handlePayment()">
      <span #ref><ng-content></ng-content></span>
      <ng-container *ngIf="!ref.hasChildNodes()">Pay now</ng-container>
    </button>
  `,
  styles: [
  ]
})
export class FountainpayComponent implements OnInit {
  @Input() config!: FpcheckoutConfig;

  @Output() public onComplete: EventEmitter<any>=new EventEmitter();
  @Output() public onClose: EventEmitter<any>=new EventEmitter();
  
  constructor(private fpService: FountainpayService) { 
  }

  ngOnInit(): void {
    if(!this.config)  throw new Error('You cannot call Fountainpay modal with empty configuration.');
  }

  private onPaymentComplete(value: any):any{
    this.onComplete.emit(value)
  }

  private onCloseMethods(): void{
    this.onClose.emit()
  }

  public  handlePayment(): void {
    const FpcheckoutArgs: FpcheckoutProps = {
      ...this.config,
      amount: this.config.amount ?? 0,
      channels: this.config?.channels ?? ["card", "qrcode", "directDebit"],
      callback: (response: FpcheckoutResponse | any) => {
        this.onPaymentComplete!(response);
      },
    close: () => {
      this.onCloseMethods!();
    },
    };
    this.fpService.payWithFountainpay(FpcheckoutArgs);
  }
}
