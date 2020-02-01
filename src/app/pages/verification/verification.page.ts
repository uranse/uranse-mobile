import { ToastService } from './../../services/toast.service';
import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { AuthConstants } from './../../config/auth-constants';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
})
export class VerificationPage implements OnInit {

  constructor(
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }
  loginAction() {
    this.authService.login();
    this.router.navigate(['home']);
  }

}
