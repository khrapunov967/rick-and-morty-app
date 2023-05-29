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

export const EPISODE_BY_ID = gql`
    query EpisodeById($id: ID!) {
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters {
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