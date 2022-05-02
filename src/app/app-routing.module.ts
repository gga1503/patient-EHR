import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {SearchBarComponent} from "./components/search-bar/search-bar.component";
import {CardShowQrComponent} from "./components/card-show-qr/card-show-qr.component";
import {CardDiseasesComponent} from "./components/card-diseases/card-diseases.component";
import {CardHospitalsComponent} from "./components/card-hospitals/card-hospitals.component";
import {CardDiseasesDetailComponent} from "./components/card-diseases-detail/card-diseases-detail.component";
import {HospitalListComponent} from "./pages/hospital-list/hospital-list.component";
import {RecordsAllHospitalsComponent} from "./pages/records-all-hospitals/records-all-hospitals.component";
import {RecordsOneHospitalComponent} from "./pages/records-one-hospital/records-one-hospital.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'hospitals', component: HospitalListComponent},
  {path: 'records-hospitals', component: RecordsAllHospitalsComponent},
  {path: 'records-one-hospital', component: RecordsOneHospitalComponent},
  {path: 'home', component: HomeComponent},
  {path: 'records', loadChildren: () => import('./pages/records/records.module').then(m => m.RecordsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
