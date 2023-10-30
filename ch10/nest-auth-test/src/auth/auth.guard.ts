import { CanActivate, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: any): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (request.cookies['login']) {
      console.log('has cookie');
      return true;
    }

    if (!request.body.eamil || !request.body.password) {
      return false;
    }
    const user = await this.authService.validateUser(
      request.body.email,
      request.body.password,
    );

    if (!user) {
      return false;
    }
    request.user = user;
    return false;
  }
}
