import { Component, ViewEncapsulation } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ModalController } from 'ionic-angular';
import { DownMarkPage } from '../down-mark/down-mark';




@Component({
  selector: 'page-vrpage',
  templateUrl: 'vrpage.html',
  encapsulation: ViewEncapsulation.None
})

export class VRPage {
  constructor(public navCtrl: NavController,private diagnostic : Diagnostic, private androidPermissions : AndroidPermissions, public platform: Platform, public modalCtrl: ModalController) {
    if (this.platform.is('android')) {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );

      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]).then(success => console.log(success), err => console.log(err));
      this.diagnostic.getPermissionAuthorizationStatus(this.diagnostic.permission.CAMERA).then((status) => {
        console.log(`AuthorizationStatus`);
        console.log(status);
        if (status != this.diagnostic.permissionStatus.GRANTED) {
          this.diagnostic.requestRuntimePermission(this.diagnostic.permission.CAMERA).then((data) => {
            console.log(`getCameraAuthorizationStatus`);
            console.log(data);
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
          })
        } else {
          console.log("We have the permission");
        }
      }, (statusError) => {
        console.log(`statusError`);
        console.log(statusError);
      });
    }
  }
  download_marker(){
    let modal = this.modalCtrl.create(DownMarkPage);
    modal.present();
  }


}
