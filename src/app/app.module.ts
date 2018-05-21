import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';
import { AddPage } from '../pages/add/add';
import { HomePage } from '../pages/home/home';
import { EditPage } from '../pages/edit/edit';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PetService } from './pet.service';

@NgModule({
  declarations: [
    MyApp,
    ListPage,
    AddPage,
    HomePage,
    EditPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    AddPage,
    HomePage,
    EditPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PetService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
