import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTargetaComponent } from './crear-targeta.component';

describe('CrearTargetaComponent', () => {
  let component: CrearTargetaComponent;
  let fixture: ComponentFixture<CrearTargetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTargetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearTargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
