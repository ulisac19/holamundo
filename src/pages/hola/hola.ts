import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'hola.html'
})
export class HolaPage {

  public msj = "Hola mundo";
  constructor(public navCtrl: NavController) {
    
  }

}
