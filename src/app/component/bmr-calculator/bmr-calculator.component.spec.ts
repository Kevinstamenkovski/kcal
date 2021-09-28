import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmrCalculatorComponent } from './bmr-calculator.component';

describe('BmrCalculatorComponent', () => {
  let component: BmrCalculatorComponent;
  let fixture: ComponentFixture<BmrCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmrCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmrCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
