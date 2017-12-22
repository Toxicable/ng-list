import {MatButtonModule, MatCheckboxModule, MatToolbar, MatSidenav, MatToolbarModule, MatSidenavModule, MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

export const REXPORT = [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
]

@NgModule({
  imports: [REXPORT],
  exports: [REXPORT],
})
export class AppMaterialModule { }