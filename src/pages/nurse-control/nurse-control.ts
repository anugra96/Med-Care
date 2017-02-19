import {NavController, NavParams, AlertController} from 'ionic-angular';
import { Component } from '@angular/core';
import {Camera} from 'ionic-native';

@Component({
  selector: 'nurse-control',
  templateUrl: 'nurse-control.html'
})

export class NurseControlPage {
  patient_need: string;
  needs: any = [];
  public base64Image: string;


  constructor(public navCtrl: NavController,private navParams: NavParams) {

    this.patient_need = navParams.get('need');
    this.addNeed(this.patient_need);
    
    



  }

  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
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

