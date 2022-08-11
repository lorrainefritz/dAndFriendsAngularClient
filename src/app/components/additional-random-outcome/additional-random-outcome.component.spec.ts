import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalRandomOutcomeComponent } from './additional-random-outcome.component';

describe('AdditionalRandomOutcomeComponent', () => {
  let component: AdditionalRandomOutcomeComponent;
  let fixture: ComponentFixture<AdditionalRandomOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalRandomOutcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalRandomOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
