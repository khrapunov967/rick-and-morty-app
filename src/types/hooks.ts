import { Character, Episode, Location } from "./data"

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

export interface IAllEpisodesResponse {
    episodes: {
        info: {
            pages: number
        },
        episodes: Episode[]
    }
};

export interface characterByIdResponse {
    character: Character
};

export interface locationByIdResponse {
    location: Location
}