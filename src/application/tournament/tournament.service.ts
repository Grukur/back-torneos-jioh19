import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tournament, TournamentDocument } from 'src/infraestructure/db/schemas/tournament.schema';
import { History, HistoryDocument } from 'src/infraestructure/db/schemas/histories.schema';
import { UserAccount, UserAccountDocument } from 'src/infraestructure/db/schemas/userAccount.schema';
import { Game, GameDocument } from 'src/infraestructure/db/schemas/game.schema';


@Injectable()
export class TournamentService {
    constructor(
        @InjectModel(Tournament.name) private tournamentModel: Model<TournamentDocument>,
        @InjectModel(History.name) private historyModel: Model<HistoryDocument>,
        @InjectModel(UserAccount.name) private userAccountModel: Model<UserAccountDocument>,
        @InjectModel(Game.name) private gameModel: Model<GameDocument>
    ) { }

    async create(tournament: any) {
        const createdTournament = new this.tournamentModel(tournament);
        const {
            _id, nameTournament, dateTime, mode, gameId,
            gameType, adminTournament, players, } = createdTournament;
        await createdTournament.save();

        const gameName = await this.gameModel.findById(gameId)
        const adminName = await this.userAccountModel.findById(adminTournament)
        const playersNames = await this.userAccountModel.find()
        .where('_id').in(players).exec()

        const createdHistories = new this.historyModel({
            tournamentId: _id,
            tournamentName: nameTournament,
            tournamentDate: dateTime,
            tournamentMode: mode,
            gameId: gameId,
            gameName: gameName?.name,
            gameType: gameType,
            adminId: adminTournament,
            adminName: adminName?.name,
            playersIds: players,
            playersNames: playersNames
        })
        await createdHistories.save();

        return createdTournament;
    }

    async findAll() {
        return this.tournamentModel.find().exec();
    }

    async delete(id: string) {
        return this.tournamentModel.findByIdAndDelete(id).exec();
    }

    async findOne(id: string) {
        return this.tournamentModel.findById(id).exec();
    }

    async update(id: string, tournament: any) {
        return this.tournamentModel.findByIdAndUpdate(id, tournament, {
            new: true,
        }).exec();
    }
}
