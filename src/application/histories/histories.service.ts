import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { History } from 'src/infraestructure/db/schemas/histories.schema';


@Injectable()
export class HistoryService {
    constructor(@InjectModel(History.name) private historiaModel: Model<History>) {}

    async create(history:any) {
        const createdHistory = new this.historiaModel(history);
        return createdHistory.save();
    }

    async findAll() {
        return this.historiaModel.find().exec();
    }

    async delete(id: string) {
        return this.historiaModel.findByIdAndDelete(id).exec();
    }

    async findOne(id: string) {
        return this.historiaModel.findById(id).exec();
    }

    async update(id: string, history: any) {
        return this.historiaModel.findByIdAndUpdate(id, history, { 
            new: true,
        }).exec();
    }
}
