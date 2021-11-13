import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserRouteoComponent } from './list-user-routeo.component';

describe('ListUserRouteoComponent', () => {
  let component: ListUserRouteoComponent;
  let fixture: ComponentFixture<ListUserRouteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserRouteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserRouteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
