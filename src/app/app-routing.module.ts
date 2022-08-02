import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

import {LoginComponent} from "./pages/login/login.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";
import {ForgotPasswordComponent} from "./pages/reset-password/forgot-password/forgot-password.component";
import {CheckYourMailComponent} from "./pages/reset-password/check-your-mail/check-your-mail.component";
import {CreateNewPasswordComponent} from "./pages/reset-password/create-new-password/create-new-password.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'check-email', component: CheckYourMailComponent},
  {path: 'create-password', component: CreateNewPasswordComponent},
  {
    path: 'hospitals',
    loadChildren: () => import('./pages/hospitals/hospitals.module').then(m => m.HospitalsModule)
  }, {
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
