import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";

@Component({
  selector: 'page-sample6',
  templateUrl: 'sample6.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class Sample6Page {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

}