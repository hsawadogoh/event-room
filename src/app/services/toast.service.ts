import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(
      private toastController: ToastController
  ) { }

  public async presentToast(message: string, type?: string) {
    let delay = 0;
    let color = '';
    if (type === 'SUCCESS') {
      delay = 5000;
      color = 'warning';
    } else if (type === 'ERROR') {
      delay = 10000;
      color = 'danger';
    } else {
      delay = 1000;
      color = 'dark';
    }
    const toast = await this.toastController.create({
      duration: delay,
      color: `${color}`,
      position: 'middle',
      message: `${message}`,
      buttons: [
        {
          text: 'Fermer',
          role: 'cancel'
        }
      ]
    });
    await toast.present();
  }
}
