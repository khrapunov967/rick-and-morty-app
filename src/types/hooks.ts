import { Character } from "./data"

export interface IAllCharacatersResponse {
    characters: {
        info: {
            pages: number
        },
        characters: Character[]
    }
};