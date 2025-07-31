import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PatientInfoComponent } from './components/patient-info/patient-info.component';
import { RegionFilterComponent } from './components/region-filter/region-filter.component';
import { BodyVisualizationComponent } from './components/body-visualization/body-visualization.component';
import { ExaminationTimelineComponent } from './components/examination-timeline/examination-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientInfoComponent,
    RegionFilterComponent,
    BodyVisualizationComponent,
    ExaminationTimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }