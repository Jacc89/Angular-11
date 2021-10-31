import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardclimaComponent } from './dashboardclima.component';

describe('DashboardclimaComponent', () => {
  let component: DashboardclimaComponent;
  let fixture: ComponentFixture<DashboardclimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardclimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardclimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
