import { TestBed } from '@angular/core/testing';

import { SpellCastingOutcomeServiceService } from './spell-casting-outcome-service.service';

describe('SpellCastingOutcomeServiceService', () => {
  let service: SpellCastingOutcomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellCastingOutcomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
