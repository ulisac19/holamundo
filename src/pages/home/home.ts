import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HolaPage } from '../../pages/hola/hola';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  datas: any;
  params: any = [];
  user:String;
  pass:String;
  app:String = "APP_WEB";
  slideOneForm: FormGroup;
  headers:any;
  constructor(private viewCtrl: ViewController, public navCtrl: NavController, public formBuilder: FormBuilder, private http:Http) {
    this.slideOneForm = formBuilder.group({
        username: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(25)])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(25)])]
    });
  }

  login() {
    
    this.params = { 'user':this.user, 'pass':this.pass, 'app':this.app};
    this.headers = this.getHeader();
    this.http.post("https://dev.tuten.cl/TutenREST/#!/user/login",
    JSON.stringify(this.params)
    , this.headers)
        .map(res => res)
        .subscribe(
          data => {
            this.datas = data.json(); 
            console.log(this.datas);
            
          }			
        );
    this.navCtrl.push(HolaPage);   
  }
  getHeader(){
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Headers", "*");
    return headers;
  }

}
