import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { EPISODE_BY_ID } from "../apollo/queries/episodes";
import { IEpisodeByIdResponse } from "../types/hooks";
import CardContainer from "../components/CardContainer";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";
import PropCard from "../components/PropCard";
import TitleContainer from "../components/TitleContainer";

const EpisodeDetails: React.FC = () => {

    const { id } = useParams();

    const { error, loading, data } = useQuery<IEpisodeByIdResponse>(EPISODE_BY_ID, {
        variables: {
            id
        }
    });

    return (
        <section>
            <TitleContainer
                title={data?.episode.name || ""}
            />

            <div className="w-full bg-[#272b33] min-h-screen flex flex-col items-center pt-8">
                {
                    error ? 
                    <div className="w-full py-[50px] flex justify-center text-white text-3xl font-bold">
                        Error was occured. Please, reload the page!
                    </div>

                :   loading ? 
                    <div className="w-full py-[50px] flex justify-center">
                        <Loader />
                    </div> 
                :
                    <>
                        <div className="w-full max-w-[50%] flex flex-col gap-2 items-center mb-8">
                            <PropCard title="Episode" value={data?.episode.episode || ""} />
                            <PropCard title="Air Date" value={data?.episode.air_date || ""} />
                        </div>

                        <h2 className="text-white text-6xl text-center font-semibold mb-4">
                            Characters
                        </h2>

                        <CardContainer>
                            {
                                !data?.episode.characters.length ? 
                                    <p className="text-white text-opacity-50 text-lg">No Residents</p>
                                :
                                data?.episode.characters.map(character => {
                                    return (
                                        <CharacterCard
                                            key={character.id}
                                            id={character.id}
                                            name={character.name}
                                            location={character.location.name}
                                            image={character.image}
                                            species={character.species}
                                            status={character.status}
                                        />
                                    )
                                })
                            }
                        </CardContainer>
                    </>
                }
            </div>
        </section>
    );
};

export default EpisodeDetails;