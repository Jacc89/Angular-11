import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabComponent } from './nab.component';

describe('NabComponent', () => {
  let component: NabComponent;
  let fixture: ComponentFixture<NabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
