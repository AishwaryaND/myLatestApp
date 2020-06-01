import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DataStore } from './dataStore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from '../providers/live-update/live-update';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SamplePage } from "../pages/sample/sample";
import { Sample2Page } from "../pages/sample2/sample2";
import { Sample3Page } from "../pages/sample3/sample3";
import { Sample4Page } from "../pages/sample4/sample4";
import { Sample6Page } from "../pages/sample6/sample6";
import { Sample8Page } from "../pages/sample8/sample8";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,SamplePage,Sample2Page,Sample3Page,Sample4Page,Sample6Page,Sample8Page],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,SamplePage,Sample2Page,Sample3Page,Sample4Page,Sample6Page,Sample8Page],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LiveUpdateProvider
  ]
})
export class AppModule {}
