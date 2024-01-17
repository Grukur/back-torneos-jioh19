import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TournamentModule } from './application/tournament/tournament.module';
import { UserAccountModule } from './application/userAccount/userAccount.module';
import { HistoryModule } from './application/histories/histories.module';
import { GameModule } from './application/game/game.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://Wolf:Wolf@wolfdevs.0tgnyjc.mongodb.net/?retryWrites=true&w=majority'),
    UserAccountModule,
    TournamentModule,
    HistoryModule,
    GameModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }   
  ],
})
export class AppModule { }
