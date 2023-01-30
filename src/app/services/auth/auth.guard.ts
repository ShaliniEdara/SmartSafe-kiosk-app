import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  ngOnInit(): void {
    localStorage.getItem('userId');
  }
  constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      alert(localStorage.getItem('userId'));
      if (localStorage.getItem('userId')) {
        // logged in so return true
        return true;
      }
      else {

        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl('/pinpart');
        
        return false;
      }
    }
}
