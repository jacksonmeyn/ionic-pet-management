import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { HelpPage } from '../help/help';

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
              public petService: PetService, public modalController: ModalController,
              public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  add() {
    //Handle blank rego number
    if (this.rego == undefined) {
      this.rego = 0;
    }
    let pet: Pet = new Pet(this.name,this.species,this.age, this.gender, this.rego, this.phone);
    if (this.petService.add(pet)) {
      //Success toast
      let successToast = this.toastController.create({
        message: "Pet named " + pet.name + " successfully added",
        duration: 4000,
        position: "middle",
        showCloseButton: true
      });
      successToast.present();
      this.clearFields();
    } else {
      //Failure toast
      let failureToast = this.toastController.create({
        message: "Pet not added. Please see help to make sure your input is valid",
        duration: 4000,
        position: "middle",
        showCloseButton: true
      });
      failureToast.present();
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

  helpModal() {
    let modal = this.modalController.create(HelpPage, {content: "Add Pet"});
    modal.present();
  }

}
