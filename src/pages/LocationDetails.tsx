import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { LOCATION_BY_ID } from "../apollo/queries/locations";
import { ILocationByIdResponse } from "../types/hooks";
import TitleContainer from "../components/TitleContainer";
import PropCard from "../components/PropCard";
import CardContainer from "../components/CardContainer";
import CharacterCard from "../components/CharacterCard";
import Loader from "../components/Loader";

const LocationDetails: React.FC = () => {

    const { id } = useParams();

    const { error, loading, data } = useQuery<ILocationByIdResponse>(LOCATION_BY_ID, {
        variables: {
            id
        }
    });

    return (
        <section>
            <TitleContainer
                title={data?.location.name || ""}
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
                            <PropCard title="Dimension" value={data?.location.dimension || ""} />
                            <PropCard title="Type" value={data?.location.type || ""} />
                        </div>

                        <h2 className="text-white text-6xl text-center font-semibold mb-4">
                            Residents
                        </h2>

                        <CardContainer>
                            {
                                !data?.location.residents.length ? 
                                    <p className="text-white text-opacity-50 text-lg">No Residents</p>
                                :
                                data?.location.residents.map(resident => {
                                    return (
                                        <CharacterCard
                                            key={resident.id}
                                            id={resident.id}
                                            name={resident.name}
                                            location={resident.location}
                                            image={resident.image}
                                            species={resident.species}
                                            status={resident.status}
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

export default LocationDetails;