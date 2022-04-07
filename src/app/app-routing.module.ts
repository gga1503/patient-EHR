import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {CardShowQrComponent} from "./card-show-qr/card-show-qr.component";
import {CardDiseasesComponent} from "./card-diseases/card-diseases.component";
import {CardHospitalsComponent} from "./card-hospitals/card-hospitals.component";
import {CardDiseasesDetailComponent} from "./card-diseases-detail/card-diseases-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: CardDiseasesDetailComponent},
  {path: 'records', loadChildren: () => import('./records/records.module').then(m => m.RecordsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
