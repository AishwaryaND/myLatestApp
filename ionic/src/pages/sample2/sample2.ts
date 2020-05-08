import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";

@Component({
  selector: 'page-sample2',
  templateUrl: 'sample2.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class Sample2Page {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

}