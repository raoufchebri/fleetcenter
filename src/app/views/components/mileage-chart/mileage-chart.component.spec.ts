import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MileageChartComponent } from './mileage-chart.component';

describe('MileageChartComponent', () => {
  let component: MileageChartComponent;
  let fixture: ComponentFixture<MileageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MileageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MileageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
