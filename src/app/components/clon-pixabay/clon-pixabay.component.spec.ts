import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClonPixabayComponent } from './clon-pixabay.component';

describe('ClonPixabayComponent', () => {
  let component: ClonPixabayComponent;
  let fixture: ComponentFixture<ClonPixabayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClonPixabayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClonPixabayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
