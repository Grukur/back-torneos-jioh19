import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAccountController } from './userAccount.controller';
import { UserAccountService } from './userAccount.service';
import { UserAccount, UserAccountSchema, Profile, ProfileSchema } from 'src/infraestructure/db/schemas/userAccount.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserAccount.name, schema: UserAccountSchema },
      { name: Profile.name, schema: ProfileSchema },
    ]),
  ],
  exports: [UserAccountService],
  controllers: [UserAccountController],
  providers: [UserAccountService],
})
export class UserAccountModule {}
