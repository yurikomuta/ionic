import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MangueiraPage } from './mangueira';

@NgModule({
  declarations: [
    MangueiraPage,
  ],
  imports: [
    IonicPageModule.forChild(MangueiraPage),
  ],
})
export class MangueiraPageModule {}
