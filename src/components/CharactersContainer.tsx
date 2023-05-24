import { Character } from "../types/data";
import CharacterCard from "./CharacterCard";

const CharactersContainer: React.FC<{characters: Character[]}> = ({characters}) => {
    return (
        <div className="w-full flex flex-wrap py-5 px-1 justify-center gap-8">
            {
                characters.map(character => {
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
        </div>
    );
};

export default CharactersContainer;