import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTargetaComponent } from './listar-targeta.component';

describe('ListarTargetaComponent', () => {
  let component: ListarTargetaComponent;
  let fixture: ComponentFixture<ListarTargetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTargetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
