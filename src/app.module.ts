import { Module } from '@nestjs/common';
import { HeroesModule } from './heroes/heroes.module';
import { TeamsModule } from './teams/teams.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/HeroesTeams'),
    HeroesModule, 
    TeamsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
