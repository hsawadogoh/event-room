import {Component, QueryList, ViewChildren} from '@angular/core';

import {AlertController, IonRouterOutlet, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChildren(IonRouterOutlet)
  routerOutlets: QueryList<IonRouterOutlet>;

  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private router: Router,
      private alertCtrl: AlertController
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();
      this.splashScreen.hide();
    });
  }

  backButtonEvent() {
    document.addEventListener('backbutton', (event) => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === '/tabs/tab1') {
          this.presentConfirmation();
        } else if (this.router.url === '/tabs/tab2') {
          this.presentConfirmation();
        } else if (this.router.url === '/tabs/tab3') {
          this.presentConfirmation();
        } else if (!outlet) {
          this.presentConfirmation();
        }
      });
    });
  }

  async presentConfirmation() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Voulez-vous quitter l\'application ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'btn-pop-up',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          cssClass: 'btn-pop-up',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    return await alert.present();
  }
}
