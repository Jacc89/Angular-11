import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoPresupuestComponent } from './ingreso-presupuest.component';

describe('IngresoPresupuestComponent', () => {
  let component: IngresoPresupuestComponent;
  let fixture: ComponentFixture<IngresoPresupuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoPresupuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPresupuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
