import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( public alertController: AlertController) { }

  async presentAlertConfirm(header: string, message: string){
    let choice;
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Okay',
          role: 'okay'
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then(data => {
      choice = data;
    });
    return choice;
  }

  async presentCustomAlert(header: string, message: string, cancelText: string, okText: string) {
    let choice;
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: cancelText,
          role: 'cancel'
        },
        {
          text: okText,
          role: 'okay'
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then(data => {
      choice = data;
    });
    return choice;
  }
}
