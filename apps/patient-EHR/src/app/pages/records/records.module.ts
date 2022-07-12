import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecordsRoutingModule} from './records-routing.module';
import {RecordsComponent} from './records/records.component';
import {RecordsShowComponent} from './records-show/records-show.component';
import {SharedModule} from "../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    RecordsComponent,
    RecordsShowComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RecordsRoutingModule,
    MatCardModule
  ],
  exports: [
    RecordsComponent,
    RecordsShowComponent
  ]
})
export class RecordsModule {
}
