import { AuthConstants } from './../config/auth-constants';
import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate  {
  constructor(public storageService: StorageService, public router: Router) { }
    canActivate(): Promise<boolean> {
     return new Promise(resolve => {
       this.storageService.get(AuthConstants.loginKey).then(res => {
         if (res) {
           this.router.navigate(['home']);
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
