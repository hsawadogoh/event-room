import { Component } from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {SearchPage} from '../search/search.page';
import {SettingsMenuPage} from '../settings-menu/settings-menu.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
      private modalCtrl: ModalController,
      private popoverCtrl: PopoverController
  ) {}

  async openSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage
    });
    return await modal.present();
  }

  async openSettingMenu() {
    const pop = await this.popoverCtrl.create({
      component: SettingsMenuPage
    })

    return await pop.present();
  }
}
