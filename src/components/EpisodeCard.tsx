import { Link } from "react-router-dom";
import { IEpisodeCard } from "../types/props";

const EpisodeCard: React.FC<IEpisodeCard> = ({id, name, episode, air_date}) => {
    return (
        <Link to={`/characters/${id}`} className="w-full max-w-[600px] flex flex-col items-center text-center bg-[#3c3e44] rounded-xl overflow-hidden gap-4 shadow-md animate-slideup p-4">
            <div>
                <p className="text-[#f5f5f5] text-3xl font-extrabold transition-colors duration-200 hover:text-[#55cc44]">
                    {name}
                </p>
            </div>

            <div>
                <p className="text-white text-opacity-50">
                    Episode:
                </p>

                <p className="text-white text-lg">
                    {episode}
                </p>
            </div>

            <div>
                <p className="text-white text-opacity-50">
                    Air Date:
                </p>

                <p className="text-white text-lg">
                    {air_date}
                </p>
            </div>
        </Link>
    );
};

export default EpisodeCard;