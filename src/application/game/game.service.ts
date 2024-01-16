import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game } from 'src/infraestructure/db/schemas/game.schema';

@Injectable()
export class GameService {
    constructor(@InjectModel(Game.name) private gameModel: Model<Game>) {}

    async create(game:any) {
        const createdGame = new this.gameModel(game);
        return createdGame.save();
    }

    async findAll() {
        return this.gameModel.find().exec();
    }

    async delete(id: string) {
        return this.gameModel.findByIdAndDelete(id).exec();
    }

    async findOne(id: string) {
        return this.gameModel.findById(id).exec();
    }

    async update(id: string, game: any) {
        return this.gameModel.findByIdAndUpdate(id, game, { 
            new: true,
        }).exec();
    }
}
