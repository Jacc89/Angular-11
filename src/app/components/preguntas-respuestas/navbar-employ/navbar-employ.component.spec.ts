import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEmployComponent } from './navbar-employ.component';

describe('NavbarEmployComponent', () => {
  let component: NavbarEmployComponent;
  let fixture: ComponentFixture<NavbarEmployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEmployComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
