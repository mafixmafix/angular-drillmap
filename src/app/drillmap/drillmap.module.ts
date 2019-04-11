import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrillmapRoutingModule } from './drillmap-routing.module';
import { DrillmapComponent } from './drillmap/drillmap.component';

import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [DrillmapComponent],
  
  imports: [
    CommonModule,
    DrillmapRoutingModule,
    HighchartsChartModule
  ]
})
export class DrillmapModule { }
