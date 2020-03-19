import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlertController} from 'ionic-angular';

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

  constructor(public alertCtrl:AlertController, public navCtrl: NavController, public navParams: NavParams) { }
   
    showAlert(){
      const alert = this.alertCtrl.create({
        title:'Conta Criada!',
        subTitle:'Por favor verifique o email cadastrado!',
        buttons:['OK']
      });
      alert.present();
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
