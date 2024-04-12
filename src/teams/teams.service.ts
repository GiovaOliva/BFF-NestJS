import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teams } from './schema/teams.schema';
import { Model } from 'mongoose';
import { Team } from 'src/interface/team.interface';

@Injectable()
export class TeamsService {

    constructor(@InjectModel(Teams.name) private teamModel: Model<Teams>){}

    async Post(team: Team): Promise<Teams> {
        
        const post = await this.teamModel.create(team);
       
        return post
    }

    async Patch(id: string, team: string): Promise<Teams>{

        const patch = await this.teamModel.findOneAndUpdate({id: id}, {team: team}) 
        
        return patch
    }

    async Get(): Promise<Teams[]>{

        const teams = await this.teamModel.find().exec();

        return teams
    }
}
