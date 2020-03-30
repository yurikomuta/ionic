import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mangueira',
  templateUrl: 'mangueira.html',
})

export class MangueiraPage {
  searchQuery: string = '';
  items: string[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Água',
      'Ácido Cloridrico',
      
    ];
  }

  getItems(ev: any) {
    
    this.initializeItems();

    
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}