import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class HelpPage {

  content: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewController: ViewController) {

  }

  ionViewDidLoad() {
    this.content = this.navParams.get('content');
  }

  dismiss() {
    this.viewController.dismiss();
  }

}
