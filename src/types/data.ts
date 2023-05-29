import { ICharacterCard } from "./props";

export type Character = {
    id: string;
    name: string;
    image: string;
    location: {
        name: string
    };
    species: string;
    status: string;
    type: string;
    gender: string;
    origin: {
        name: string
    }
};

export type Location = {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: ICharacterCard[]
};

export type Episode = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: ICharacterCard[]
};

