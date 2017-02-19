import {NavController} from 'ionic-angular';
import { Component } from '@angular/core';
import {PatientNeedsPage} from "../patient-needs/patient-needs";

@Component({
  selector: 'nurse-control',
  templateUrl: 'nurse-control.html'
})

export class NurseControlPage {
  public todoList: Array<string>

  constructor(private nav: NavController) {}

  onPageDidEnter() {
    this.todoList = JSON.parse(localStorage.getItem("nurse-control"));
    if (!this.todoList) {
      this.todoList = [];
    }
  }

  delete(index: number) {
    this.todoList.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }

  add() {
    this.nav.push(PatientNeedsPage);
  }
}

/*
 Generated class for the Todos page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
