import { Controller, Get, Query } from '@nestjs/common';
import { QueryParams, RespuestaBFF } from 'src/interface/respuesta.interface';
import { HeroesLogic } from './heroes.logic';

@Controller('heroes')
export class HeroesController {

  constructor(private HeroesLogic: HeroesLogic) {}

  @Get()
  getHeroes(@Query() query: QueryParams): Promise<RespuestaBFF> {

    return this.HeroesLogic.getHeroes(query);
    
  }
}