import { Episode, Location } from "./data";

export interface ICharacterCard {
    id: string;
    name: string;
    image: string;
    location: string;
    species: string;
    status: string;
};

export interface ILocationCard extends Location {};

export interface IEpisodeCard extends Episode {};

export interface IPageController {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    maxPage: number;
    minPage: number;
};