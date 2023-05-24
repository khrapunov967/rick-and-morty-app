
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