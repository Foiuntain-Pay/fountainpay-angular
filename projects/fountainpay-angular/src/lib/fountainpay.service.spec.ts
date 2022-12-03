import { TestBed } from '@angular/core/testing';

import { FountainpayService } from './fountainpay.service';

describe('FountainpayService', () => {
  let service: FountainpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FountainpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
