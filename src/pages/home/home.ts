import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NurseControlPage } from '../nurse-control/nurse-control';
import { PatientNeedsPage } from '../patient-needs/patient-needs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  NurseControl(r) {
    this.navCtrl.push(NurseControlPage);
  }

  PatientNeeds(r) {
    this.navCtrl.push(PatientNeedsPage);
  }

}
