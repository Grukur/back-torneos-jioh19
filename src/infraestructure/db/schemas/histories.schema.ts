import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type HistoryDocument = HydratedDocument<History>;

@Schema()
export class History {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'Tournament'})
    tournamentId: mongoose.Types.ObjectId;

    @Prop()
    tournamentName?: string;

    @Prop()
    tournamentDate?: string;

    @Prop()
    tournamentMode?: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'game'})
    gameId: mongoose.Types.ObjectId;

    @Prop()
    gameName?: string;

    @Prop()
    gameType?: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref:'UserAccount'})
    adminId?: mongoose.Types.ObjectId;

    @Prop()
    adminName?: string;

    @Prop({ type:[{type: mongoose.Schema.Types.ObjectId, ref:'UserAccount'}] })
    playersIds?: mongoose.Types.ObjectId[];

    @Prop()
    playersNames?: string[];
}

export const HistorySchema = SchemaFactory.createForClass(History);