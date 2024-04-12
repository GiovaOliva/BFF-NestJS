import { Injectable } from "@nestjs/common";
import { PatchResponse, PostResponse } from "src/interface/team.interface";
import { Team } from 'src/interface/team.interface';
import { TeamsService } from "./teams.service";


@Injectable()
export class TeamLogic {

    constructor(private readonly TeamService: TeamsService){}

    async postLogic(team: Team): Promise<PostResponse> {

        const response = await this.TeamService.Post(team)
        
        return {

            action: 'post',
            id: response.id,
            team: response.team

        }
    
    }


    async patchLogic({id, team}: Team): Promise<PatchResponse> {
        
      
        const response = await this.TeamService.Patch(id, team)


        return{

            action: 'patch',
            id: response.id,
            team: response.team,
            newTeam: team

        }
    }
}