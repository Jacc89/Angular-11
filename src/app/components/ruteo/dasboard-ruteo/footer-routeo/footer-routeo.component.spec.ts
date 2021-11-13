import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRouteoComponent } from './footer-routeo.component';

describe('FooterRouteoComponent', () => {
  let component: FooterRouteoComponent;
  let fixture: ComponentFixture<FooterRouteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterRouteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterRouteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
