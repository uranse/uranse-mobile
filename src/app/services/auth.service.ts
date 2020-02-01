import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>([]);

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  login() {
    this.storageService.setIsLoggedIn();
  }
  logout() {
    this.storageService.removeItem('isloggedin');
    this.storageService.clear();
    this.router.navigate(['']);
  }
}
