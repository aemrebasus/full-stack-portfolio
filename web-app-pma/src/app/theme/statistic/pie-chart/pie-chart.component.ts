import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  private ctx: CanvasRenderingContext2D;


  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  constructor(private ref: ElementRef) { }


  ngOnInit(): void {


    const ctx = this.canvas.nativeElement.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Fifty', 'sixty', 'Ninety'],
        datasets: [
          {
            label: ',Numbers ',
            data: [50, 60, 90],
            backgroundColor: ['yello', 'aqua', 'orange']
          }
        ],
      }
    });

  }





}
