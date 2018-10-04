import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TutorialPage } from '../tuto/tuto';
import { ActPage } from '../act/act';
import { Platform } from "ionic-angular";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public platform: Platform) {
    storage.get('tuto').then((val) => {
      console.log('Votre mdp est ', val);
      if(val == null  || val == false){
        let modal = this.modalCtrl.create(TutorialPage);
        modal.present();
      }
    });
  }


  Test(){
    this.navCtrl.setRoot(ActPage)
  }

}
