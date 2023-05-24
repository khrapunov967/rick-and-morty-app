import { ICharacterCard } from "../types/props";

const CharacterCard: React.FC<ICharacterCard> = ({name, image, species, status, location}) => {
    return (
        <div className="card">
            <img 
                src={image} 
                alt="Char." 
                className="card__image"
            />

            <div className="card__info">
                <p className="card__info__name">
                    {name}
                </p>

                <div className="card__info__type">
                    <p className="card__info__type__">
                        {status} - {species}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;