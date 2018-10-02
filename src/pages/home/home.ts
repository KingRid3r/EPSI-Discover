import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TutorialPage } from '../tuto/tuto';
import { Platform } from "ionic-angular";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage, public platform: Platform,private diagnostic : Diagnostic, private androidPermissions : AndroidPermissions ) {
    if(this.platform.is('android'))
    {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );

      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    }

    storage.get('tuto').then((val) => {
      console.log('Votre mdp est ', val);
      if(val == null  || val == false){
        let modal = this.modalCtrl.create(TutorialPage);
        modal.present();
      }
    });
  }

}
