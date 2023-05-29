import { Character, Episode, Location } from "./data";


export interface ICharacterCard extends Omit<Character, "origin" | "gender" | "type"> {};

export interface ILocationCard extends Omit<Location, "residents"> {};

export interface IEpisodeCard extends Omit<Episode, "characters"> {};

export interface IPageController {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    maxPage: number;
    minPage: number;
};