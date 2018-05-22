import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { HelpPage } from '../help/help';

import { PetService } from '../../app/pet.service';

import { Pet } from '../../app/pet';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

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
    this.name = this.navParams.get('name');
    this.age = this.navParams.get('age');
    this.species = this.navParams.get('species');
    this.gender = this.navParams.get('sex');
    this.rego = this.navParams.get('rego');
    this.phone = this.navParams.get('phone');
  }

  save() {
    let pet : Pet = new Pet(this.name,this.species,this.age,this.gender,this.rego,this.phone)

    if(this.petService.update(pet)) {
      //Success toast
      let successToast = this.toastController.create({
        message: "Pet named " + pet.name + " successfully edited",
        duration: 4000,
        position: "middle",
        showCloseButton: true
      });
      successToast.present();
      this.navCtrl.pop();
    } else {
      //Failure toast
      let failureToast = this.toastController.create({
        message: "Pet not edited. Please see help to make sure your input is valid",
        duration: 4000,
        position: "middle",
        showCloseButton: true
      });
      failureToast.present();
    }
  }

  helpModal() {
    let modal = this.modalController.create(HelpPage, {content: "Edit Pet"});
    modal.present();
  }

}
