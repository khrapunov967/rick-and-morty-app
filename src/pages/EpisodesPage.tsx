import { useQuery } from "@apollo/client";
import { IAllEpisodesResponse } from "../types/hooks";
import { useState } from "react";
import { ALL_EPISODES } from "../apollo/queries/episodes";
import TitleContainer from "../components/TitleContainer";
import PageController from "../components/PageController";
import Loader from "../components/Loader";
import CardContainer from "../components/CardContainer";
import EpisodeCard from "../components/EpisodeCard";

const EpisodesPage: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    
    const { error, loading, data } = useQuery<IAllEpisodesResponse>(ALL_EPISODES, {
        variables: {
            page: currentPage
        }
    });

    return (
        <section>
            <TitleContainer
                title="Episodes"
            />

            <div className="w-full bg-[#272b33] min-h-screen">
                <PageController
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    maxPage={data?.episodes.info.pages ?? 1}
                    minPage={1}
                />
                
                {
                    error ? 
                        <div className="w-full py-[50px] flex justify-center text-white text-3xl font-bold">
                            Error was occured. Please, reload the page!
                        </div>
                    :
                    loading ? 
                        <div className="w-full py-[50px] flex justify-center">
                            <Loader />
                        </div> 
                    :
                        <CardContainer>
                            {
                                data?.episodes.episodes.map(episode => {
                                    return (
                                        <EpisodeCard
                                            key={episode.id}
                                            id={episode.id}
                                            name={episode.name}
                                            air_date={episode.air_date}
                                            episode={episode.episode}
                                        />
                                    )
                                })
                            }
                        </CardContainer>
                }
            </div>
        </section>
    );
};

export default EpisodesPage;