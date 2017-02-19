import {NavController} from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'patient-needs',
  templateUrl: 'patient-needs.html'
})

export class PatientNeedsPage {
  public todoList: Array<string>;
  public todoItem: string;


  constructor(private nav: NavController){
    this.todoList = JSON.parse(localStorage.getItem("nurse-control"));
    if (!this.todoList) {
      this.todoList = [];
    }
    this.todoItem = "";
  }

  save() {
    if (this.todoItem != "") {
      this.todoList.push(this.todoItem);
      localStorage.setItem("nurse-control", JSON.stringify(this.todoList));
      this.nav.pop();
    }
  }
}

