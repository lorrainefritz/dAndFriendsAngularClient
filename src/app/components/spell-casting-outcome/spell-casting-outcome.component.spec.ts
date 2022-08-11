import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCastingOutcomeComponent } from './spell-casting-outcome.component';

describe('SpellCastingOutcomeComponent', () => {
  let component: SpellCastingOutcomeComponent;
  let fixture: ComponentFixture<SpellCastingOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellCastingOutcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellCastingOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
