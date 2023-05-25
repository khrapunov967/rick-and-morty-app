import { Link } from "react-router-dom";
import { ILocationCard } from "../types/props";

const LocationCard: React.FC<ILocationCard> = ({id, name, dimension, type}) => {
    return (
        <Link to={`/characters/${id}`} className="w-full max-w-[600px] flex flex-col items-center text-center bg-[#3c3e44] rounded-xl overflow-hidden gap-4 shadow-md animate-slideup p-4">
            <div>
                <p className="text-[#f5f5f5] text-3xl font-extrabold transition-colors duration-200 hover:text-[#55cc44]">
                    {name}
                </p>
            </div>

            <div>
                <p className="text-white text-opacity-50">
                    Type:
                </p>

                <p className="text-white text-lg">
                    {type}
                </p>
            </div>

            <div>
                <p className="text-white text-opacity-50">
                    Dimension:
                </p>

                <p className="text-white text-lg">
                    {dimension}
                </p>
            </div>
        </Link>
    );
};

export default LocationCard;