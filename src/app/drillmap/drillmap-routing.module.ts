import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrillmapComponent } from './drillmap/drillmap.component';

const routes: Routes = [
  { path: '', component: DrillmapComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrillmapRoutingModule { }
