import { Component, OnInit } from '@angular/core';
import {NavController, PopoverController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.page.html',
  styleUrls: ['./settings-menu.page.scss'],
})
export class SettingsMenuPage implements OnInit {
  constructor(
      private popoverController: PopoverController,
      // private loginService: LoginService,
      private router: Router,
      // private toastService: ToastService,
      private navController: NavController
  ) { }

  ngOnInit() {

  }

  onDismiss(value: string) {
    this.popoverController.dismiss();
    if (value === 'DECONNEXION') {
      // this.loginService.logout();
      // this.toastService.presentToast('Vous êtes déconnectés !');
      this.navController.navigateBack('');
    } else if (value === 'AIDE') {
      // this.router.navigateByUrl('/help');
    } else {
      // this.router.navigateByUrl('/a-propos');
    }
  }

}
