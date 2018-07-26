import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../services/user.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardService {
  helper = new JwtHelperService();


  constructor(private router: Router, private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.accessToken && !this.helper.isTokenExpired(this.userService.accessToken)) {
      return true;
    } else {
      this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
      return false;
    }
  }
}
