import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcitasComponent } from './listcitas.component';

describe('ListcitasComponent', () => {
  let component: ListcitasComponent;
  let fixture: ComponentFixture<ListcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
