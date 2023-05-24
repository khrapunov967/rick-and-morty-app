import { gql } from "@apollo/client";

export const ALL_CHARACTERS = gql`
    query AllCharacters($page: Int) {
        characters(page: $page) {
            characters: results {
                id
                name
                status
                image
                species
                location {
                    name
                }
            }
        }
    }
`;