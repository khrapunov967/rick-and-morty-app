import { useQuery } from "@apollo/client";
import { IAllLocationsResponse } from "../types/hooks";
import { useState } from "react";
import { ALL_LOCATIONS } from "../apollo/queries/locations";
import TitleContainer from "../components/TitleContainer";
import PageController from "../components/PageController";
import Loader from "../components/Loader";
import CardContainer from "../components/CardContainer";
import LocationCard from "../components/LocationCard";

const Locations: React.FC = () => {

    const [currentPage, setCurrentPage] = useState(1);
    
    const { error, loading, data } = useQuery<IAllLocationsResponse>(ALL_LOCATIONS, {
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
                    maxPage={data?.locations.info.pages ?? 1}
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
                                data?.locations.locations.map(location => {
                                    return (
                                        <LocationCard
                                            id={location.id}
                                            name={location.name}
                                            dimension={location.dimension}
                                            type={location.type}
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

export default Locations;