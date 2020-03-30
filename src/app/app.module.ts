import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { MontagemPage } from '../pages/montagem/montagem';
import { PontasPage } from '../pages/pontas/pontas';
import { MangueiraPage } from '../pages/mangueira/mangueira';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MontagemPage,
    PontasPage,
    MangueiraPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    MontagemPage,
    PontasPage,
    MangueiraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
