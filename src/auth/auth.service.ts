import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAccountService } from 'src/application/userAccount/userAccount.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userAccountService: UserAccountService,
    private jwtService: JwtService
  ) {}

  async signIn(id: string, pass: string): Promise<any> {
    const user = await this.userAccountService.findOne(id);
    if (user?.password !== pass) {
      console.log(id, pass)
      console.log(user)
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, id: user.name}
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
    
  }
}
