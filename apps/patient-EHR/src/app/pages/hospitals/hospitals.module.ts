import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HospitalsRoutingModule} from './hospitals-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {HospitalsComponent} from "./hospitals/hospitals.component";
import {HospitalsDiseasesComponent} from "./hospitals-diseases/hospitals-diseases.component";


@NgModule({
  declarations: [
    HospitalsComponent,
    HospitalsDiseasesComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HospitalsRoutingModule
  ],
  exports: [
    HospitalsComponent,
    HospitalsDiseasesComponent
  ]
})
export class HospitalsModule {
}
