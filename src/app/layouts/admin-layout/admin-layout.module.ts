import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule,FormControl, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { CustomerSegmentAndProductwiseAnalysisComponent } from "../../pages/customer-segment-and-productwise-analysis/customer-segment-and-productwise-analysis.component";
import { IgxCalendarModule,IgxCardModule } from 'igniteui-angular';


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionMaps from "fusioncharts/fusioncharts.maps";
import * as India from "fusionmaps/maps/fusioncharts.india";
import * as Maharashtra from "fusionmaps/maps/fusioncharts.maharashtra";
import * as Rajasthan from "fusionmaps/maps/fusioncharts.rajasthan";
import * as Andhrapradesh from "fusionmaps/maps/fusioncharts.andhrapradesh";
import * as gujarat from "fusionmaps/maps/fusioncharts.gujarat";
import * as timeseries from "fusioncharts/fusioncharts.timeseries";
import { MatDatepickerModule, MatInputModule,MatNativeDateModule} from '@angular/material';
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GujaratComponent } from '../../pages/gujarat/gujarat.component';


FusionChartsModule.fcRoot(
  FusionCharts,
  FusionMaps,
  India,
  Rajasthan,
  Andhrapradesh,
  Maharashtra,
  gujarat,
  FusionTheme,
  charts,
  timeseries
  );
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    FusionChartsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    IgxCalendarModule,
    IgxCardModule
  ],
  declarations: [
    NotificationsComponent,
    CustomerSegmentAndProductwiseAnalysisComponent,
    GujaratComponent
  ]
})
export class AdminLayoutModule {}
