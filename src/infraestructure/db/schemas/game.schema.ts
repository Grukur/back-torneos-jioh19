import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GameType } from '../dto/enums';

export type GameDocument = HydratedDocument<Game>;

@Schema()
export class Game {
  @Prop()
  name: string;

  @Prop()
  genre: GameType;

  @Prop()
  platform: string;

  @Prop()
  rank: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
