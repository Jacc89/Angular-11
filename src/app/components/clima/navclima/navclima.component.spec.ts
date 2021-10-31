import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavclimaComponent } from './navclima.component';

describe('NavclimaComponent', () => {
  let component: NavclimaComponent;
  let fixture: ComponentFixture<NavclimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavclimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavclimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
