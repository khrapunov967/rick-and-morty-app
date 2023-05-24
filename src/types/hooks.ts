import { Character, Location } from "./data"

export interface IAllCharacatersResponse {
    characters: {
        info: {
            pages: number
        },
        characters: Character[]
    }
};

export interface IAllLocationsResponse {
    locations: {
        info: {
            pages: number
        },
        locations: Location[]
    }
};