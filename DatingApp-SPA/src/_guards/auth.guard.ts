import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService,
    private router: Router,
    private alertify: AlertifyService
  ) {}
  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true;
    }
    this.alertify.error('You Shall Not Pass!!!');
    this.router.navigate(['/home']);
    return false;
  }
}
