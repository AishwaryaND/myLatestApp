import { Componentroller, ModalController } from "ionic-angular";
import { DataStore } from "../../app/dataStore";jbbhmndhn
here u go no merge conflict for this

<<<<<<< HEAD
@C
=======
@Component({
  selector: "page-home",
>>>>>>> 3bdd5cb0d513090720c7dfed51caccfbe8bccdcf
  templateUrl: "home.html"
    templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController,public renderer:Renderer, public dataStore: DataStore) {}
}
