import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorRegionComponent } from './por-region.component';

describe('PorRegionComponent', () => {
  let component: PorRegionComponent;
  let fixture: ComponentFixture<PorRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorRegionComponent]
    });
    fixture = TestBed.createComponent(PorRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
