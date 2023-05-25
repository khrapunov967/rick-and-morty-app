import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../apollo/queries/characters";
import { IAllCharacatersResponse } from "../types/hooks";
import { useState } from "react";
import TitleContainer from "../components/TitleContainer";
import PageController from "../components/PageController";
import Loader from "../components/Loader";
import CardContainer from "../components/CardContainer";
import CharacterCard from "../components/CharacterCard";

const CharactersPage: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    
    const { error, loading, data } = useQuery<IAllCharacatersResponse>(ALL_CHARACTERS, {
        variables: {
            page: currentPage
        }
    });

    return (
        <section>
            <TitleContainer
                title="Characters"
            />

            <div className="w-full bg-[#272b33] min-h-screen">
                <PageController
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                    maxPage={data?.characters.info.pages ?? 1}
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
                                data?.characters.characters.map(character => {
                                    return (
                                        <CharacterCard
                                            id={character.id}
                                            name={character.name}
                                            status={character.status}
                                            species={character.species}
                                            location={character.location.name}
                                            image={character.image}
                                        />
                                    );
                                })
                            }
                        </CardContainer>
                }
            </div>
        </section>
    );
};

export default CharactersPage;