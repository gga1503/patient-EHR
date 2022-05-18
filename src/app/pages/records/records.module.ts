import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecordsRoutingModule} from './records-routing.module';
import {RecordsComponent} from './records/records.component';
import {RecordsShowComponent} from './records-show/records-show.component';
import {RecordsAllHospitalsComponent} from "./records-all-hospitals/records-all-hospitals.component";
import {RecordsOneHospitalComponent} from "./records-one-hospital/records-one-hospital.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    RecordsComponent,
    RecordsShowComponent,
    RecordsAllHospitalsComponent,
    RecordsOneHospitalComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RecordsRoutingModule
  ],
  exports: [
    RecordsComponent,
    RecordsShowComponent,
    RecordsAllHospitalsComponent,
    RecordsOneHospitalComponent
  ]
})
export class RecordsModule {
}
