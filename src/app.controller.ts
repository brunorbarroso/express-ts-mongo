import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller('api/account')
export class AppController {

  constructor(private readonly authService: AuthService){}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  async accountSignIn(@Request() request) {
    return this.authService.login(request.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  async getProfile(@Request() request) {
    return request.user;
  }

}
