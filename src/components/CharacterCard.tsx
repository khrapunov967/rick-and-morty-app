import { Link } from "react-router-dom";
import { ICharacterCard } from "../types/props";

const CharacterCard: React.FC<ICharacterCard> = ({name, image, species, status, location, id}) => {
    return (
        <Link to={`/characters/${id}`} className="w-full max-w-[600px] flex bg-[#3c3e44] rounded-xl overflow-hidden gap-4 shadow-md animate-slideup">
            <img 
                src={image} 
                alt="Char." 
                className="w-full max-w-[45%]"
            />

            <div className="flex flex-col items-start mt-3">
                <p className="text-[#f5f5f5] text-3xl font-extrabold mb-4">
                    {name}
                </p>

                <div className="flex flex-col gap-5">
                    <div>
                        <p className="text-white text-opacity-50">
                            Status:
                        </p>

                        <p className="text-white">
                            {status}
                        </p>
                    </div>

                    <div>
                        <p className="text-white text-opacity-50">
                            Species:
                        </p>

                        <p className="text-white">
                            {species}
                        </p>
                    </div>

                    <div>
                        <p className="text-white text-opacity-50">
                            Last known location:
                        </p>

                        <p className="text-white">
                            {location}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;