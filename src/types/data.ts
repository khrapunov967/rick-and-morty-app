
export type Character = {
    id: string;
    name: string;
    image: string;
    location: {
        name: string
    };
    species: string;
    status: string;
};

export type Location = {
    id: string;
    name: string;
    type: string;
    dimension: string;
};

export type Episode = {
    id: string;
    name: string;
    air_date: string;
    episode: string;
};