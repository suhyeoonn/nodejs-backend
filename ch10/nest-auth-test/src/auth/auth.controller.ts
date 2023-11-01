import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  Response,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import {
  AuthenticatedGuard,
  GoogleAuthGuard,
  LocalAuthGuard,
  LoginGard,
} from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() userDto: CreateUserDto) {
    return await this.authService.register(userDto);
  }

  @Post('login')
  async login(@Request() req, @Response() res) {
    const userInfo = await this.authService.validateUser(
      req.body.email,
      req.body.password,
    );

    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
      });
    } else {
      console.log('not match password');
    }
    return res.send({ message: 'login success' });
  }

  @UseGuards(LoginGard)
  @Post('/login2')
  async login2(@Request() req, @Response() res) {
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        // maxAge: 1000 * 60 * 60 * 24, //1day
        maxAge: 1000 * 10, //test
      });
    }
    return res.send({ message: 'login2 success' });
  }

  @UseGuards(LoginGard)
  @Get('test-guard')
  testGuard() {
    return '로그인된 때만 이 글이 보입니다';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login3')
  login3(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('test-guard2')
  testGuardWithSession(@Request() req) {
    return req.user;
  }

  @Get('to-google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Request() req) {}

  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuthRedirect(@Request() req, @Response() res) {
    const { user } = req;
    return res.send(user);
  }
}
