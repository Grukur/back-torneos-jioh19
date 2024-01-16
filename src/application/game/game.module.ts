import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Game,
  GameSchema,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  GameDocument,
} from 'src/infraestructure/db/schemas/game.schema';
import { GameService } from './game.service';
import { GameController } from './game.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Game.name,
        schema: GameSchema,
      },
    ]),
  ],
  providers: [GameService],
  controllers: [GameController],
})
export class GameModule {}
