import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTypeOfSpellComponent } from './custom-type-of-spell.component';

describe('CustomTypeOfSpellComponent', () => {
  let component: CustomTypeOfSpellComponent;
  let fixture: ComponentFixture<CustomTypeOfSpellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTypeOfSpellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTypeOfSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
