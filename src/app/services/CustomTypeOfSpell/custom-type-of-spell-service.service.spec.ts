import { TestBed } from '@angular/core/testing';

import { CustomTypeOfSpellServiceService } from './custom-type-of-spell-service.service';

describe('CustomTypeOfSpellServiceService', () => {
  let service: CustomTypeOfSpellServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomTypeOfSpellServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
