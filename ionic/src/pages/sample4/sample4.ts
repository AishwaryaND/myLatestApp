import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";

@Component({
  selector: 'page-sample4',
  templateUrl: 'sample4.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class Sample4Page {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

}