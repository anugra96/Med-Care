import {NavController, NavParams, AlertController} from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'nurse-control',
  templateUrl: 'nurse-control.html'
})

export class NurseControlPage {
  patient_need: string;
  needs: any = [];


  constructor(public navCtrl: NavController,private navParams: NavParams) {

    this.patient_need = navParams.get('need');
    this.addNeed(this.patient_need);



  }


  addNeed(need) {
    this.needs.push(need);
  }


  deleteNeed(need){
    let index = this.needs.indexOf(need);

    if (index > -1) {
      this.needs.splice(index, 1);

    }
  }

}

