import {
  Controller,
  Post,
  Body,
  Param,
  Delete,
  Get,
  Put,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { Roles } from 'src/auth/auth.decorators';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('torneo')
export class TournamentController {
  constructor(private tournamentService: TournamentService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createTournament: any) {
    return this.tournamentService.create(createTournament);
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles('admin', 'mod')
  async findAll() {
    return this.tournamentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.tournamentService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.tournamentService.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTodo: any,
  ) {
    return this.tournamentService.update(id, updateTodo);
  }
}
