import { CurrencyDataService } from 'src/app/currency-data.service';
import { TestBed } from '@angular/core/testing';


describe('CurrencyDataService', () => {
  let service: CurrencyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
