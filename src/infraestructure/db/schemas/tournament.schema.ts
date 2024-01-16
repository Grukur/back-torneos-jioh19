import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Document } from 'mongoose';
import { GameType, Role, Mode } from '../dto/enums';

export type TournamentDocument = HydratedDocument<Tournament>;

@Schema()
export class Tournament extends Document {
  @Prop()
  nameTournament: string;

  @Prop()
  description?: string;

  @Prop()
  dateTime?: Date;

  @Prop()
  gameType?: GameType;

  //Relacion con Juego para obtener el id del juego
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Games' })
  gameId?: mongoose.Types.ObjectId;

  @Prop()
  participants?: number;

  @Prop()
  result?: number;

  @Prop()
  requireExp?: string;

  /* @Prop()//me parece que esto no tiene sentido aqui, lo puse en user.
  roles?: Role; */

  @Prop()
  mode?: Mode;

  //Relacion con UserAccount para obtener el id del admin
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserAccount' })
  adminTournament: mongoose.Types.ObjectId[];

  //Relacion con UserAccount para obtener el id de los jugadores
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserAccount' }] })
  players: mongoose.Types.ObjectId[]
}

export const TournamentSchema = SchemaFactory.createForClass(Tournament);