import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorSubregionComponent } from './por-subregion.component';

describe('PorSubregionComponent', () => {
  let component: PorSubregionComponent;
  let fixture: ComponentFixture<PorSubregionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorSubregionComponent]
    });
    fixture = TestBed.createComponent(PorSubregionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
