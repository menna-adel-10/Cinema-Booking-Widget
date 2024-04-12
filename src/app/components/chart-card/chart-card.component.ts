import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";



@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html'
})
export class ChartCardComponent implements OnInit{
   @ViewChild('chartContainer') chartContainer!: ElementRef;

  constructor(private renderer: Renderer2) {}

 chartOptions: any = {
    chart: {
     type: 'area',
     toolbar: {
        show: false
     },
     height: 200,
    },
    series: [{
      name: 'استخدام',
      data: [90, 140, 30, 100, 250, 200, 210, 150, 50, 110, 85, 190],
   }],
   dataLabels: {
     enabled: false
    },
   tooltip: {
     enabled: true,
     theme: 'dark',
   },
    colors: ['#8A74F9'],
    stroke: {
      curve: 'smooth'
   },
   xaxis: {
      categories: [
        'ديسمبر',
        'نوفمبر',
        'أكتوبر',
        'سبتمبر',
        'أغسطس',
        'يوليو',
        'يونيو',
        'مايو',
        'أبريل',
        'مارس',
        'فبراير',
        'يناير',
      ],
     labels: {
      show: true,
      style: {
          fontFamily: 'Neo Sans Arabic',
          fontWeight: 500,
          colors: '#9291A5',
      }
    }
   },
   yaxis: {
     labels: {
       show: false
     }
   }
  };


 ngOnInit(): void {
    this.toggleXAxisLabels();

    this.renderer.listen('window', 'resize', () => {
      this.toggleXAxisLabels();
    });
  }

  toggleXAxisLabels(): void {
    if (window.innerWidth <= 668) {
      this.chartOptions.xaxis.labels.show = false;
    } else {
      this.chartOptions.xaxis.labels.show = true;
    }

  }

}
