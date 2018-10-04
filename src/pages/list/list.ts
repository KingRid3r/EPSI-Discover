import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  articles: any;
  classe: any;
  items: any;
  films: any;


  constructor(private toastCtrl: ToastController, public httpClient: HttpClient, public http: HTTP, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.httpClient.get('http://discoverepsi.alwaysdata.net/get_Article.php').subscribe(data => {
      if(data) {
        this.articles = data;
        this.items = this.articles;
      }else{
        console.log("Erreur impossible d'accéder aux articles")
      }
    });
  }

  rafraichir(refresher){

    refresher.complete();
  }


  initialize(){
    this.items = this.articles;
  }

  getArts(ev: any) {
    // Reset items back to all of the items
    this.initialize();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.titre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    console.log(this.items);
  }
}
