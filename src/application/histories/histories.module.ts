import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { History, HistorySchema } from 'src/infraestructure/db/schemas/histories.schema';
import { HistoryService } from './histories.service';
import { HistoryController } from './histories.controller';

@Module({
    imports: [MongooseModule.forFeature([{
        name: History.name,
        schema: HistorySchema,
    }])],
    providers: [HistoryService],
    controllers: [HistoryController]
})
export class HistoryModule { }
