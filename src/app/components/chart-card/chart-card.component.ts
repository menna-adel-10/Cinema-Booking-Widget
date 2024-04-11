import { Component, OnInit } from "@angular/core";
import { ApexAxisChartSeries, ApexChart } from "ng-apexcharts";



@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html'
})
export class ChartCardComponent implements OnInit{

  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Series 1',
      data: [200, 150, 250, 50, 110]
    }
  ];

  chartDetails: ApexChart = {
    type: 'area',
    toolbar: {
      show: true
    }
  };

  ngOnInit(): void {

  }
}
