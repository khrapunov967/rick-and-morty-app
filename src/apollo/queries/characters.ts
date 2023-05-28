import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
    query AllCharacters($page: Int) {
        characters(page: $page) {
            info {
                pages
            }
            characters: results {
                id
                name
                status
                species
                type
                gender
                origin {
                    name
                }
                location {
                    name
                }
                image
            }
        }
    }
`;

export const CHARACTER_BY_ID = gql`
    query CharacterById($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            origin {
                name
            }
            location {
                name
            }
            image
        }
    }
`;