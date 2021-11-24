import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRuteoComponent } from './user-ruteo.component';

describe('UserRuteoComponent', () => {
  let component: UserRuteoComponent;
  let fixture: ComponentFixture<UserRuteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRuteoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRuteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
