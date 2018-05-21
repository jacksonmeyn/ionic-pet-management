import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PetService } from '../../app/pet.service';

import { Pet } from '../../app/pet';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  public name:string;
  public age: number;
  public species: string;
  public gender: string;
  public rego: number;
  public phone: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public petService: PetService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  add() {
    let pet: Pet = new Pet(this.name,this.species,this.age, this.gender, this.rego, this.phone);
    if (this.petService.add(pet)) {
      //Success toast
      this.clearFields();
    } else {
      //Failure toast
    }
  }

  clearFields() {
    this.name = "";
    this.age = null;
    this.species = "";
    this.gender = "";
    this.rego = null;
    this.phone = "";
  }



}
