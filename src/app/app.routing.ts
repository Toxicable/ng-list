import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddModuleComponent } from './add-module/add-module.component';

const routes: Routes = [
  { path: 'apply', component: AddModuleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AddModuleRoutingModule { }

export const routedComponents = [AddModuleComponent];