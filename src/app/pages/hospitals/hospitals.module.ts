import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HospitalsRoutingModule} from './hospitals-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {HospitalsComponent} from "./hospitals/hospitals.component";
import {HospitalsRecordsComponent} from "./hospitals-records/hospitals-records.component";


@NgModule({
  declarations: [
    HospitalsComponent,
    HospitalsRecordsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HospitalsRoutingModule
  ],
  exports: [
    HospitalsComponent,
    HospitalsRecordsComponent
  ]
})
export class HospitalsModule {
}
