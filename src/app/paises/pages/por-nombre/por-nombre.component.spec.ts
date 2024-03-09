import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorNombreComponent } from './por-nombre.component';

describe('PorNombreComponent', () => {
  let component: PorNombreComponent;
  let fixture: ComponentFixture<PorNombreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorNombreComponent]
    });
    fixture = TestBed.createComponent(PorNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
