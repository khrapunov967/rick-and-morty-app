import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../apollo/queries/characters";
import { IAllCharacatersResponse } from "../types/hooks";
import { useState } from "react";
import CharactersContainer from "../components/CharactersContainer";
import TitleContainer from "../components/TitleContainer";
import PageController from "../components/PageController";
import Loader from "../components/Loader";

const LocationsPage: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    
    const { error, loading, data } = useQuery<IAllCharacatersResponse>(ALL_CHARACTERS, {
        variables: {
            page: currentPage
        }
    });

    return (
        <section>
            <TitleContainer
                title="Locations"
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
                        <CharactersContainer
                            characters={data?.characters.characters ?? []}
                        />
                }
            </div>
        </section>
    );
};

export default LocationsPage;