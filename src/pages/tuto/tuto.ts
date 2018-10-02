import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tuto',
  templateUrl: 'tuto.html',
})
export class TutorialPage {
  neplusaff: any;
  constructor(public viewCtrl: ViewController, private storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  closeTuto(){
    this.storage.set('tuto', this.neplusaff);
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
