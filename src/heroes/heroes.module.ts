import { Module } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { HeroesLogic } from './heroes.logic';
import { HttpModule } from '@nestjs/axios'; // Import HttpService
import { TeamsService } from 'src/teams/teams.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema, Teams } from 'src/teams/schema/teams.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{name: Teams.name, schema: TeamSchema}])], // Import HttpModule
  providers: [HeroesService, HeroesLogic, TeamsService],
  controllers: [HeroesController]
})
export class HeroesModule {}