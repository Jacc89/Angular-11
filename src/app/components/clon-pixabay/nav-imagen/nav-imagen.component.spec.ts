import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavImagenComponent } from './nav-imagen.component';

describe('NavImagenComponent', () => {
  let component: NavImagenComponent;
  let fixture: ComponentFixture<NavImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
