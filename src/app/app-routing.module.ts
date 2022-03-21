import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EcdhComponent} from './ecdh/ecdh.component';
import {KeyGenerationComponent} from './key-generation/key-generation.component';
import {RsaComponent} from './rsa/rsa.component';

const routes: Routes = [
  {path: '', redirectTo: '/ecdh', pathMatch: 'full'},
  {path: 'ecdh', component: EcdhComponent},
  {path: 'rsa', component: RsaComponent},
  {path: 'key-generation', component: KeyGenerationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
