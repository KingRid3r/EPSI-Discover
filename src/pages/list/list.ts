import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
  Fav: any;

  constructor(private toastCtrl: ToastController, public http: Http, public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=')
        .map(res => res.json())
        .subscribe(data => {
          if(data.erreur){
            console.log(data.erreur);


            let toast = this.toastCtrl.create({
              message: data.erreur,
              duration: 3000,
              position: 'bottom'
            });
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
            toast.present();

          }else if(data.articles){
            console.log(data.articles);
            this.articles = data.articles;
            for(var i in this.articles){
              this.articles[i].gdate = new Date(this.articles[i].date);
            }
            this.items = this.articles;
          }else{
            console.log("Erreur indéfinie (peut être n'êtes vous pas connecté a internet)");
            let toast = this.toastCtrl.create({
              message: "Erreur indéfinie (peut être n'êtes vous pas connecté a internet)",
              duration: 3000,
              position: 'bottom'
            });
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
            toast.present();
          }
        });
      console.log(this.articles);
      this.classe = "bite";
      console.log(this.classe);
    }
  rafraichir(refresher){
    this.http.get('http://www.sebastien-thon.fr/cours/M4104Cip/projet/index.php?login=')
      .map(res => res.json())
      .subscribe(data => {
        if(data.erreur){
          console.log(data.erreur);

          let toast = this.toastCtrl.create({
            message: "Vous n'êtes pas connecté",
            duration: 3000,
            position: 'bottom'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
          toast.present();

        }else if(data.articles){
          console.log(data.articles);
          this.articles = data.articles;
          for(var i in this.articles){
            this.articles[i].gdate = new Date(this.articles[i].date);
          }
          this.items = this.articles;
        }else{
          console.log("Erreur indéfinie (peut être n'êtes vous pas connecté a internet)");
          let toast = this.toastCtrl.create({
            message: "Erreur indéfinie (peut être n'êtes vous pas connecté a internet)",
            duration: 3000,
            position: 'bottom'
          });
          toast.onDidDismiss(() => {
            console.log('Dismissed toast');
          });
          toast.present();
        }
      });
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

  addFav(idArt, checked){
    console.log(idArt);

    this.storage.get('Fav').then((val) => {
      if(val){
        this.Fav = JSON.parse(val);
        this.Fav[idArt] = checked;
        console.log(this.Fav);
        this.storage.set('Fav', JSON.stringify(this.Fav));
      }else{
        console.log("pas de stockage")
        this.Fav = new Object();
        this.Fav[idArt] = checked;
        console.log(this.Fav);
        this.storage.set('Fav', JSON.stringify(this.Fav));
      }
    });

  }

}
