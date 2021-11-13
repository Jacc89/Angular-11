import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRouteoComponent } from './navbar-routeo.component';

describe('NavbarRouteoComponent', () => {
  let component: NavbarRouteoComponent;
  let fixture: ComponentFixture<NavbarRouteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRouteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRouteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
