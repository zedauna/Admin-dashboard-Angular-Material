import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../services/login/login-service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isAuthenticatedUser()) {
    router.navigate(['/login']);
    return false;
  }

  const isLoggedIn  = !!localStorage.getItem('Itachi Ulchia');
  if (!isLoggedIn) {
    router.navigate(['/login']); // redirige si pas connecté
    return false;
  }

  return true;
};
