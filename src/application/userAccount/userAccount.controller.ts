import { Controller, Post, Body, Param, Delete, Get, Put, ValidationPipe } from '@nestjs/common';
import { UserAccountService } from './userAccount.service';
import { Public } from 'src/auth/auth.decorators';

@Controller('user')
export class UserAccountController {
  constructor(private userAccountService: UserAccountService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createUserAccount: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Body(new ValidationPipe()) createProfile: any,
  ) {
    return this.userAccountService.create(createUserAccount);
  }

  @Get()
  @Public()
  async findAll() {
    return this.userAccountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userAccountService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userAccountService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateUserAccount: any,
  ) {
    return this.userAccountService.update(id, updateUserAccount);
  }
}