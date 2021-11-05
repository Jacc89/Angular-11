import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnernotiComponent } from './spinnernoti.component';

describe('SpinnernotiComponent', () => {
  let component: SpinnernotiComponent;
  let fixture: ComponentFixture<SpinnernotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnernotiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnernotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
