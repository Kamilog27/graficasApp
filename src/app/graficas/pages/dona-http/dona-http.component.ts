import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = [
     //'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
    ];
  public doughnutChartData: ChartData<'doughnut'>={
    labels:this.doughnutChartLabels,
    datasets:[
      {
        data:[],
        backgroundColor:[
          '#2283F6',
          '#1EA1D4',
          '#2DE7EB',
          '#1ED4A3',
          '#22F682'
        ]
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
    /* this.graficasService.getUsuariosRedesSociales()
      .subscribe(data=>{
        const labels=Object.keys(data);
        const values=Object.values(data);
        this.doughnutChartData={
          labels:labels,
          datasets:[{data:values}]
        }
      })*/
      this.graficasService.getUsuariosRedesSocialesDonaData()
        .subscribe(({labels,values})=>{
          this.doughnutChartData.labels=labels;
          this.doughnutChartData.datasets[0].data=values
        })

  } 

}
