import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';

const { Toast } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  // Display toast
 async show(textToShow: string, toastDuration?: any, toastPosition?: any) {
   await Toast.show({
     duration :  toastDuration,
     text : textToShow,
   });
 }
}
