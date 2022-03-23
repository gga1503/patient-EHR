import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EcdhComponent} from './ecdh/ecdh.component';

const routes: Routes = [
  {path: '', redirectTo: '/ecdh', pathMatch: 'full'},
  {path: 'ecdh', component: EcdhComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
