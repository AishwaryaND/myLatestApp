import { Componentroller, ModalController } from "ionic-angular";
import { DataStore } from "../../app/dataStore";jbbhmndhn


@Component({
  selector: "page-home",
  templateUrl: "home.html"
    templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController,public renderer:Renderer, public dataStore: DataStore) {}
}
