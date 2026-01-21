import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { authState } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

export const guestGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return authState(auth).pipe(
    map((user) => {
      if (user) {
        router.navigate(['/']);
        return false;
      }

      return true;
    }),
  );
};
