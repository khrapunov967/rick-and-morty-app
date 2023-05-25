import { gql } from "@apollo/client";

export const ALL_EPISODES = gql`
    query AllEpisodes($page: Int) {
        episodes(page: $page) {
            info {
                pages
            }
            episodes: results {
                id
                name
                air_date
                episode
            }
        }
    }
`;