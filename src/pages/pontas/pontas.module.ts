import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PontasPage } from './pontas';

@NgModule({
  declarations: [
    PontasPage,
  ],
  imports: [
    IonicPageModule.forChild(PontasPage),
  ],
})
export class PontasPageModule {}
