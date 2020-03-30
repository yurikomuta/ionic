import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { MontagemPage } from '../montagem/montagem';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cnpjcpf:number;
  email:string;
  password:string;
  constructor(public navCtrl: NavController, public alertCtrl:AlertController ) {

  }

  //validação
  login(){
    console.log("cnpjcpf" + this.cnpjcpf);
    console.log("email" + this.email);
    console.log("password" + this.password);
    this.navCtrl.push(MontagemPage);
  }

  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

  doAlert(){
    this.alertCtrl.create({
      title:'Enviado!',
      message:'Enviado o código de recuperação. Verifique o email cadastro',
      buttons:['Fechar']
    })
  }
}
