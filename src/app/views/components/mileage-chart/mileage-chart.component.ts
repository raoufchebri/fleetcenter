import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-mileage-chart',
  templateUrl: './mileage-chart.component.html',
  styleUrls: ['./mileage-chart.component.scss']
})
export class MileageChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }],

    }
  };
  public barChartLabels: Label[] = ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;

  public barChartData: ChartDataSets[] = [
    { data: [1536, 2453, 1023, 950, 863, 1300], label: 'Fleet Average', backgroundColor: '#D5ECFB' },
    { data: [564, 1460, 1523, 305, 1635, 687], label: 'Current' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
} 
