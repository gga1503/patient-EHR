import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {HospitalListComponent} from "./pages/hospital-list/hospital-list.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'hospitals', component: HospitalListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {
    path: 'records',
    loadChildren: () => import('./pages/records/records.module').then(m => m.RecordsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
