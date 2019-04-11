import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

declare var require: any;
const usaMap = require('@highcharts/map-collection/countries/us/us-all.geo.json');
const newMap = require('@highcharts/map-collection/countries/us/us-co-all.geo.json');

@Injectable({
  providedIn: 'root'
})
export class DrillmapService {

  series = [
    {
      name: 'test',
      data: [{
        id: 'us-co',
        drilldown: 'us-co',
        value: 100
      }],
      mapData: usaMap,
      allowPointSelect: true,
      joinBy: ['hc-key', 'id']
    }
  ];
  drilldown = {
    series: [
      {
        mapData: newMap,
        name: 'us-co',
        id: 'us-co',
        data: [
          ['us-co-081', 58]
        ]
      }
    ]
  };

  constructor() { }

  getSeries(): Observable<any> {
    return of(this.series);
  }

  getDrilldown(): Observable<any> {
    return of(this.drilldown);
  }
}
