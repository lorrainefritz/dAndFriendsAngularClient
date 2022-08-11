import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellShortDescriptionComponent } from './spell-short-description.component';

describe('SpellShortDescriptionComponent', () => {
  let component: SpellShortDescriptionComponent;
  let fixture: ComponentFixture<SpellShortDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellShortDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
