import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavurlComponent } from './navurl.component';

describe('NavurlComponent', () => {
  let component: NavurlComponent;
  let fixture: ComponentFixture<NavurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavurlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
