import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable()
export class UserService {
  accessToken: string;
  isAdmin: boolean;
  private TOKEN_NAME = 'access_token';
  helper = new JwtHelperService();

  constructor() {
    this.accessToken = localStorage.getItem(this.TOKEN_NAME);
  }

  login(accessToken: string) {
    const decodedToken = this.helper.decodeToken(accessToken);
    console.log(decodedToken);

    this.isAdmin = decodedToken.authorities.some(el => el === 'ADMIN_USER');
    this.accessToken = accessToken;

    localStorage.setItem(this.TOKEN_NAME, accessToken);
  }

  logout() {
    this.accessToken = null;
    this.isAdmin = false;
    localStorage.removeItem(this.TOKEN_NAME);
  }

  isAdminUser(): boolean {
    return this.isAdmin;
  }

  isUser(): boolean {
    return this.accessToken && !this.isAdmin;
  }

}
