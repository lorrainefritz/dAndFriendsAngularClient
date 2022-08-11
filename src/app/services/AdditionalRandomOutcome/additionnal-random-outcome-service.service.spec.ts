import { TestBed } from '@angular/core/testing';

import { AdditionnalRandomOutcomeServiceService } from './additionnal-random-outcome-service.service';

describe('AdditionnalRandomOutcomeServiceService', () => {
  let service: AdditionnalRandomOutcomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionnalRandomOutcomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
