import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecordsComponent} from './records/records.component';
import {RecordsShowComponent} from './records-show/records-show.component';
import {RecordsOneHospitalComponent} from "./records-one-hospital/records-one-hospital.component";
import {RecordsAllHospitalsComponent} from "./records-all-hospitals/records-all-hospitals.component";

const routes: Routes = [
  {path: '', component: RecordsComponent},
  {path: 'show', component: RecordsShowComponent},
  {path: 'oneh', component: RecordsOneHospitalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule {
}
