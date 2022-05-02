import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { RecordsComponent } from './records/records.component';
import { RecordsShowComponent } from './records-show/records-show.component';


@NgModule({
  declarations: [
    RecordsComponent,
    RecordsShowComponent
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule
  ]
})
export class RecordsModule { }
