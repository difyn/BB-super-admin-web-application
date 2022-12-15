import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LocationInspectionReportsComponent} from './location-inspection-reports.component';

describe('LocationInspectionReportsComponent', () => {
  let component: LocationInspectionReportsComponent;
  let fixture: ComponentFixture<LocationInspectionReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationInspectionReportsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LocationInspectionReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
