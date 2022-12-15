import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LocationSalesManagementComponent} from './location-sales-management.component';

describe('LocationSalesManagementComponent', () => {
  let component: LocationSalesManagementComponent;
  let fixture: ComponentFixture<LocationSalesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationSalesManagementComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LocationSalesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
