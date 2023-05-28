
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

export type CharacterOmit = Omit<Character, "origin" | "gender" | "type">;

export type Location = {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: CharacterOmit[]
};

export type Episode = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
};