import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LocationOperatorsDashboardComponent} from './location-operators-dashboard.component';

describe('LocationOperatorsDashboardComponent', () => {
  let component: LocationOperatorsDashboardComponent;
  let fixture: ComponentFixture<LocationOperatorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationOperatorsDashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LocationOperatorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
