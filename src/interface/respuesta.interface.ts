import { Heroe, MarvelHeroe } from "./heroes.interface";
import { Team } from "./team.interface";

export interface RespuestaBFF {
    arrayHeroes: Heroe[]
    total: number
}

export interface QueryParams {
    offset: number
    searchString?: string
}

export interface MarvelResponse{
    data: {
        data: {
            results: MarvelHeroe[],
            total: number
        }
    }
}

export interface ServiceResponse {
    marvelResponse: MarvelResponse
    mongoResponse: Team[]
}