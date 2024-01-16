import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  UserAccount,
  UserAccountDocument,
  Profile,
  ProfileDocument,
} from 'src/infraestructure/db/schemas/userAccount.schema';

@Injectable()
export class UserAccountService {
  constructor(
    @InjectModel(UserAccount.name)
    private userAccountModel: Model<UserAccountDocument>,
    @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
  ) {}

  async create(userAccountData: any) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { profiles, ...profile } = userAccountData;
    const { favorites, socialNetworks, ...rest } = profiles[0];

    const createdProfile = new this.profileModel({ ...rest });
    if (favorites) {
      createdProfile.favorites = favorites;
    }
    if (socialNetworks) {
      createdProfile.socialNetworks = socialNetworks;
    }
    await createdProfile.save();

    const createdUserAccount = new this.userAccountModel(userAccountData);
    createdUserAccount.profiles = [createdProfile];
    await createdUserAccount.save();

    return createdUserAccount;
  }

  async findAll() {
    return this.userAccountModel.find().exec();
  }

  async delete(id: string) {
    return this.userAccountModel.findByIdAndDelete(id).exec();
  }

  //sove the problem that the profile was unreachable, now we can reach it with the 
  //find by id method.
  async findOne(id: string): Promise<UserAccount> {
    const userAccount = await this.userAccountModel
    .findById(id)
    .populate('profiles')
    .exec();

    if(!userAccount){
      throw new NotFoundException(`User Account #${id} not found`);
    }
    return userAccount
  }

  async update(id: string, userAccount: any) {
    return this.userAccountModel
      .findByIdAndUpdate(id, userAccount, {
        new: true,
      })
      .exec();
  }
}
