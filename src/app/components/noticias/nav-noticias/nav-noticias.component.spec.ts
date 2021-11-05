import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNoticiasComponent } from './nav-noticias.component';

describe('NavNoticiasComponent', () => {
  let component: NavNoticiasComponent;
  let fixture: ComponentFixture<NavNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
