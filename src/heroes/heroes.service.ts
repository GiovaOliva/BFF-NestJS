import { Injectable } from '@nestjs/common';
import { MarvelResponse, QueryParams, ServiceResponse } from 'src/interface/respuesta.interface';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { TeamsService } from 'src/teams/teams.service';


@Injectable()
export class HeroesService {

  private url = "https://gateway.marvel.com:443/v1/public/characters?ts=1"
  private apiKey = "4e25473721ec4cf62e3fb5e5d817bf7d"
  private hash = "e5dacd6966feba077ce3a33bf4068292"


  constructor(
      private httpService: HttpService,
      private TeamService: TeamsService
  ){}

  async Request({offset, searchString}: QueryParams): Promise<ServiceResponse> {


    const url = `${this.url}&apikey=${this.apiKey}&hash=${this.hash}&limit=20&offset=${offset}${searchString ? `&nameStartsWith=${searchString}`: ''}`
    
    const marvelResponse: MarvelResponse = await lastValueFrom(this.httpService.get(url))
    const mongoResponse = await this.TeamService.Get()
  
    return {
        
        marvelResponse,
        mongoResponse

    }

  }

}