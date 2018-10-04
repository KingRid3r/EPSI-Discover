import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FileChooser} from "@ionic-native/file-chooser";

/**
 * Generated class for the CvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cv',
  templateUrl: 'cv.html',
})
export class CvPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private fileChooser: FileChooser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CvPage');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'CV envoyé avec succès !',
      duration: 3000,
      position: 'bot'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();}

    choosef(){
      this.fileChooser.open()
        .then(uri => console.log(uri))
        .catch(e => console.log(e));
    }

}
