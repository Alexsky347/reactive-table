import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { map } from 'rxjs';

export class AuthorizedGuard {
  isAuthenticated() {
    const router = inject(Router);
    const securityService = inject(OidcSecurityService);
    return securityService.isAuthenticated$.pipe(
      map(({ isAuthenticated }) => {
        // allow navigation if authenticated
        if (isAuthenticated) {
          return true;
        }

        // redirect if not authenticated
        return router.parseUrl('');
      })
    );
  }
}
