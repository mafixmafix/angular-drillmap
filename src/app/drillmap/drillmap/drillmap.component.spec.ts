import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillmapComponent } from './drillmap.component';

describe('DrillmapComponent', () => {
  let component: DrillmapComponent;
  let fixture: ComponentFixture<DrillmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
