import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRuteoComponent } from './layout-ruteo.component';

describe('LayoutRuteoComponent', () => {
  let component: LayoutRuteoComponent;
  let fixture: ComponentFixture<LayoutRuteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutRuteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutRuteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
