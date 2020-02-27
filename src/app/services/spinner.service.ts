import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  isLoading = false;
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
      spinner: 'lines',
      showBackdrop: true
    }).then(a => {
      a.present().then(() => {
        console.log('Presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Click the backdrop to dismiss early...',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

  async dismiss() {
   this.isLoading = false;
   return await this.loadingController.dismiss();
  }
}
