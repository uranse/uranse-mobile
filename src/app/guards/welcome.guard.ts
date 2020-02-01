import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeGuard implements CanActivate  {
  constructor(public storageService: StorageService, public router: Router) { }
    canActivate(): Promise<boolean> {
     return new Promise(resolve => {
       this.storageService.get(AuthConstants.notNewUserKey).then(res => {
         if (res) {
           this.router.navigate(['login']);
           resolve(false);
         } else {
           resolve(true);
         }
       }).catch(err => {
         resolve(false);
       });
     });
  }
}
