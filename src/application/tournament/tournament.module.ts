import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tournament, TournamentSchema } from 'src/infraestructure/db/schemas/tournament.schema';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { History, HistorySchema } from 'src/infraestructure/db/schemas/histories.schema';
import { Game, GameSchema } from 'src/infraestructure/db/schemas/game.schema';
import { UserAccount, UserAccountSchema } from 'src/infraestructure/db/schemas/userAccount.schema';

@Module({
    imports: [MongooseModule.forFeature([
        { name: Tournament.name, schema: TournamentSchema },
        { name: History.name, schema: HistorySchema },
        { name: Game.name, schema: GameSchema },
        { name: UserAccount.name, schema: UserAccountSchema }
    ])],
    providers: [TournamentService],
    controllers: [TournamentController]
})
export class TournamentModule { }
