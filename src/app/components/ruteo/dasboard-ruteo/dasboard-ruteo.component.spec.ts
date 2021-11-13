import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardRuteoComponent } from './dasboard-ruteo.component';

describe('DasboardRuteoComponent', () => {
  let component: DasboardRuteoComponent;
  let fixture: ComponentFixture<DasboardRuteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasboardRuteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardRuteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
