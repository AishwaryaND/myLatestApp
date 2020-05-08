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

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,SamplePage,Sample2Page],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,SamplePage,Sample2Page],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LiveUpdateProvider
  ]
})
export class AppModule {}
