import { IsNotEmpty, IsString } from "class-validator";

export class TeamDto{

    @IsNotEmpty()
    @IsString()
    id: string;

    
    @IsNotEmpty()
    @IsString()
    team: string;

}