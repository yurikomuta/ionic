import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PontasPage } from '../pontas/pontas';


@IonicPage()
@Component({
  selector: 'page-montagem',
  templateUrl: 'montagem.html',
})
export class MontagemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MontagemPage');
  }

  pontaA(){
    this.navCtrl.push(PontasPage);
  }

}
