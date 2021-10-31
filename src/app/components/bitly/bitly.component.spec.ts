import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitlyComponent } from './bitly.component';

describe('BitlyComponent', () => {
  let component: BitlyComponent;
  let fixture: ComponentFixture<BitlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
