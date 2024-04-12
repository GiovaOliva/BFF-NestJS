import { Injectable } from "@nestjs/common";
import { QueryParams, RespuestaBFF } from "src/interface/respuesta.interface";
import { Heroe, MarvelHeroe } from "src/interface/heroes.interface"
import { HeroesService } from "./heroes.service";
import { Team } from "src/interface/team.interface";


@Injectable()
export class HeroesLogic{

  constructor(private readonly HeroesService: HeroesService){}

  async getHeroes(query: QueryParams): Promise<RespuestaBFF>{

    const {marvelResponse, mongoResponse} = await this.HeroesService.Request(query)
    let arrayHeroes: Heroe[] = [];  
    const total = marvelResponse.data.data.total
    marvelResponse.data.data.results.forEach( (heroe: MarvelHeroe) => {
        let team= '';
        mongoResponse.forEach( ( heroeWithTeam: Team) => {
            if(heroeWithTeam.id == heroe.id){
                team = heroeWithTeam.team
            }
        })
        let Heroe: Heroe = {
            id: heroe.id,
            name: heroe.name,
            description: heroe.description,
            modified: heroe.modified,
            thumbnail_path: heroe.thumbnail.path,
            thumbnail_extension: heroe.thumbnail.extension,
            resourceURI: heroe.resourceURI,
            teamColor: team 
        }
        arrayHeroes.push(Heroe)
    });

    return {arrayHeroes, total}
  }

}

