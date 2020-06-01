import { Component, ViewChild, Renderer, ChangeDetectorRef,NgModule } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from "../providers/live-update/live-update";
import { SamplePage } from "../pages/sample/sample";
import { Sample2Page } from "../pages/sample2/sample2";
import { SamplePage } from "../pages/sample/sample";
import { Sample2Page } from "../pages/sample2/sample2";
import { Sample3Page } from "../pages/sample3/sample3";
import { Sample4Page } from "../pages/sample4/sample4";
import { Sample6Page } from "../pages/sample6/sample6";
import { Sample8Page } from "../pages/sample8/sample8";

@Component({
  templateUrl: 'app.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private renderer: Renderer, private cdr: ChangeDetectorRef,private liveUpdateService:LiveUpdateProvider) {
    renderer.listenGlobal('document', 'mfpjsloaded', () => {
      this.initializeApp(renderer, cdr);
    });

    // used for an example of ngFor and navigation
    this.pages = [
                                                      { title: 'Home', component: HomePage } ,{title:'sample', component: SamplePage} ,{title:'sample2', component: Sample2Page} ,{title:'sample', component: SamplePage} ,{title:'sample2', component: Sample2Page} ,{title:'sample3', component: Sample3Page} ,{title:'sample4', component: Sample4Page} ,{title:'sample6', component: Sample6Page} ,{title:'sample8', component: Sample8Page}
                                                    ];
      renderer.listenGlobal('document', 'mfpjsloaded', () => { WL.Analytics.enable();});

  }

  initializeApp(renderer, cdr) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = HomePage;
      cdr.detectChanges();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
