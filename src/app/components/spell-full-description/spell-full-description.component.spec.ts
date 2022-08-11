import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellFullDescriptionComponent } from './spell-full-description.component';

describe('SpellFullDescriptionComponent', () => {
  let component: SpellFullDescriptionComponent;
  let fixture: ComponentFixture<SpellFullDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellFullDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellFullDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
