import { Routes } from "@angular/router";

 import { CustomerSegmentAndProductwiseAnalysisComponent } from "../../pages/customer-segment-and-productwise-analysis/customer-segment-and-productwise-analysis.component";
 import { GujaratComponent } from '../../pages/gujarat/gujarat.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";
export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: CustomerSegmentAndProductwiseAnalysisComponent },
  { path: "gujarat", component: GujaratComponent },
  // { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
