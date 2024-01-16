import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Role, SocialNetwork } from '../dto/enums';

@Schema()
export class Profile extends Document {
  @Prop()
  userName: string;

  @Prop()
  description?: string;

  @Prop()
  avatar?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserAccount' })
  jugador?: mongoose.Types.ObjectId;

  @Prop()
  favorites: string[];

  @Prop({ type: [Object] })
  socialNetworks?: SocialNetwork[];
}

@Schema()
export class UserAccount extends Document {
  @Prop()
  name: string;

  @Prop()
  password?: string;

  @Prop({ type: [String] })
  roles?: Role[];
  
  @Prop()
  email?: string;
  
  @Prop()
  birth?: string;
  
  @Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }] })
  profiles?: Profile[];
}

export const UserAccountSchema = SchemaFactory.createForClass(UserAccount);
export const ProfileSchema = SchemaFactory.createForClass(Profile);

export type UserAccountDocument = UserAccount & Document;
export type ProfileDocument = Profile & Document;