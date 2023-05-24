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