import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, ToastController, AlertController } from 'ionic-angular';

import { HelpPage } from '../help/help';

import { PetService } from '../../app/pet.service';

import { Pet } from '../../app/pet';
import { EditPage } from '../edit/edit';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  pets: Pet[];

  constructor(public navCtrl: NavController,
              public petService: PetService,
              public modalController: ModalController,
              public toastController: ToastController,
              public alertController: AlertController,
            ) {
  }

  ngOnInit() {
    this.getPets();
  }

  getPets() : void {
    this.pets = this.petService.getAll();
  }

  editView(editPet: Pet) {
    this.navCtrl.push(EditPage, editPet);
  }

  helpModal() {
    let modal = this.modalController.create(HelpPage, {content: "Pet List"});
    modal.present();
  }

  delete(name: string) {
    if(this.petService.delete(name)) {
      //Success toast
      let successToast = this.toastController.create({
        message: "Pet record for " + name + " successfully deleted",
        duration: 4000,
        position: "middle",
        showCloseButton: true
      });
      successToast.present();
    } else {
      //Failure toast
      let failureToast = this.toastController.create({
        message: "Pet record could not be deleted",
        duration: 4000,
        position: "middle",
        showCloseButton: true
      });
      failureToast.present();      
    }
  }

  confirmDelete(name: string) {
    let alert = this.alertController.create({
      title: 'Confirm deletion?',
      message: 'Are you sure you want to delete ' + name +'?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.delete(name);
        }
      }
      ]
    });
    alert.present();
  }

}
