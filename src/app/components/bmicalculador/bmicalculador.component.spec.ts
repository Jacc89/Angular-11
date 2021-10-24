import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICALCULADORComponent } from './bmicalculador.component';

describe('BMICALCULADORComponent', () => {
  let component: BMICALCULADORComponent;
  let fixture: ComponentFixture<BMICALCULADORComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BMICALCULADORComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BMICALCULADORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
