import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { CHARACTER_BY_ID } from "../apollo/queries/characters";
import { ICharacterByIdResponse } from "../types/hooks";
import TitleContainer from "../components/TitleContainer";
import PropCard from "../components/PropCard";
import Loader from "../components/Loader";

const CharacterDetails: React.FC = () => {

    const { id } = useParams();

    const { error, loading, data } = useQuery<ICharacterByIdResponse>(CHARACTER_BY_ID, {
        variables: {
            id
        }
    });

    return (
        <section>
            <TitleContainer
                title={data?.character.name || ""}
            />

            <div className="w-full min-h-screen bg-[#272b33] p-3 flex flex-col items-center pt-8">
                <div className="w-[60%] flex justify-center gap-2 items-center">
                    <img 
                        src={data?.character.image} 
                        alt={data?.character.name} 
                        className="rounded-xl"
                    />

                    <div className="flex flex-col gap-2 w-full">
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
                                <PropCard title="Status" value={data?.character.status || ""} />
                                <PropCard title="Location" value={data?.character.location.name || ""} />
                                <PropCard title="Origin" value={data?.character.origin.name || ""} />
                                <PropCard title="Gender" value={data?.character.gender || ""} />
                                <PropCard title="Species" value={data?.character.species || ""} /> 
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CharacterDetails;