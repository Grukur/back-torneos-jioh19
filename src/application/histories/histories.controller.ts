import { Controller, Post, Body, Param, Delete, Get, Put, ValidationPipe } from '@nestjs/common';
import { HistoryService } from './histories.service';

@Controller('historia')
export class HistoryController {
    constructor(private historyService: HistoryService) { }

    @Post()
    async create(@Body(new ValidationPipe()) createHistory: any) {
        return this.historyService.create(createHistory);
    }

    @Get()
    async findAll() {
        return this.historyService.findAll();
    }

    @Get(':id')
    async findOne(
        @Param('id') id: string) {
        return this.historyService.findOne(id);
    }

    @Delete(':id')
    async delete(
        @Param('id') id: string) {
        return this.historyService.delete(id)
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body(new ValidationPipe()) updateHistory: any) {
            return this.historyService.update(id, updateHistory);
    }
}
