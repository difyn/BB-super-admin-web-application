import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LocationActivitiesComponent} from './location-activities.component';

describe('LocationActivitiesComponent', () => {
  let component: LocationActivitiesComponent;
  let fixture: ComponentFixture<LocationActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationActivitiesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LocationActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
