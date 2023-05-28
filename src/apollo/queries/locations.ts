import { gql } from "@apollo/client";

export const ALL_LOCATIONS = gql`
    query AllLocations ($page: Int) {
        locations(page: $page) {
            info {
                pages
            }
            
            locations: results {
                id
                name
                type
                dimension
            }
        }
    }
`;

export const LOCATION_BY_ID = gql`
    query LocationById($id: ID!) {
        location(id: $id) {
            name
            type
            dimension
            residents {
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