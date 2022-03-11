import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcdhComponent } from './ecdh/ecdh.component';
import {KeyGenerationComponent} from './key-generation/key-generation.component';

const routes: Routes = [
  {
    path: 'ecdh',
    component: EcdhComponent
  },
  {
    path: 'key-generation',
    component: KeyGenerationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
