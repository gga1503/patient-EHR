import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HospitalsRecordsComponent} from "./hospitals-records/hospitals-records.component";
import {HospitalsComponent} from "./hospitals/hospitals.component";

const routes: Routes = [
  {path: '', component: HospitalsComponent},
  {path: 'records', component: HospitalsRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule {
}
