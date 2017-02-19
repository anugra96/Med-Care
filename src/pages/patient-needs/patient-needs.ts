import {NavController} from 'ionic-angular';
import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';




@Component({
  selector: 'patient-needs',
  templateUrl: 'patient-needs.html'
})

export class PatientNeedsPage {


  constructor(private navController: NavController,public alertCtrl: AlertController){}

  AllAlert() {
    let alert = this.alertCtrl.create({
      title: 'SENT',
      subTitle: 'We will be right with you!',
    });
    alert.present();
  }
}


