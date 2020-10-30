import {Component, OnInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {SearchPage} from '../search/search.page';
import {SettingsMenuPage} from '../settings-menu/settings-menu.page';
import {LoadingService} from '../../services/loading.service';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  constructor(
      private modalCtrl: ModalController,
      private popoverCtrl: PopoverController,
      private loadingService: LoadingService,
      private toastService: ToastService
  ) {}

  ngOnInit(): void {
  }

  async openSettingMenu() {
    const pop = await this.popoverCtrl.create({
      component: SettingsMenuPage
    });

    return await pop.present();
  }

  async openSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage
    });
    return await modal.present();
  }
}
