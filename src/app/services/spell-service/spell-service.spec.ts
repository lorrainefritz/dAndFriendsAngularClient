import { TestBed } from '@angular/core/testing';

import { SpellService } from './spell-service';

describe('SpellServiceService', () => {
  let service: SpellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
