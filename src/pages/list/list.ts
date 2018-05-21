import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

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
              public petService: PetService) {
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

}
