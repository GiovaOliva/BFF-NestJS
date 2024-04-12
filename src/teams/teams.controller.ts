import { Body, Controller, Patch, Post } from '@nestjs/common';
import { PatchResponse, PostResponse } from 'src/interface/team.interface';
import { Team } from 'src/interface/team.interface';
import { TeamLogic } from './teams.logic';
import { TeamDto } from './dto/team.dto';

@Controller('teams')
export class TeamsController {

    constructor(private TeamLogic: TeamLogic){}

    @Post()
    postTeam(@Body() team: TeamDto): Promise<PostResponse>{
        
        return this.TeamLogic.postLogic(team);

    }    

    @Patch()
    patchTeam(@Body() team: TeamDto): Promise<PatchResponse>{
        
        return this.TeamLogic.patchLogic(team);

    }

}
