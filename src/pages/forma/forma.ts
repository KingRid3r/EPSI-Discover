import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the FormaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forma',
  templateUrl: 'forma.html',
})
export class FormaPage {
  articles: any;
  classe: any;
  items: any;
  films: any;

  constructor(public httpClient: HttpClient, public http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
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
