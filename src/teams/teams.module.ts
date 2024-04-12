import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TeamLogic } from './teams.logic';
import { MongooseModule } from '@nestjs/mongoose';
import { Teams, TeamSchema } from './schema/teams.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Teams.name, schema: TeamSchema}])],
  providers: [TeamsService, TeamLogic],
  controllers: [TeamsController]
})
export class TeamsModule {}
