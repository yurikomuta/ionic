import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  cnpjcpf:number;
  email:string;
  password:string;
  celular:string;
  repass:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
    console.log("cnpjcpf" + this.cnpjcpf);
    console.log("email" + this.email);
    console.log("password" + this.password);
    console.log("repass" + this.repass);
    console.log("celular" + this.celular);

   
  }
}
