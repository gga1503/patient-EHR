import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HospitalsDiseasesComponent} from "./diseases/hospitals-diseases.component";
import {HospitalsComponent} from "./hospitals.component";

const routes: Routes = [
  {path: '', component: HospitalsComponent},
  {path: 'diseases', component: HospitalsDiseasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule {
}
