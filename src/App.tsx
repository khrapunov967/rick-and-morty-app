import { ALL_CHARACTERS } from "./apollo/queries/characters";
import { IAllCharacatersResponse } from "./types/hooks";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

const App: React.FC = () => {

  const { error, loading, data } = useQuery<IAllCharacatersResponse>(ALL_CHARACTERS, {
    variables: {
      page: 2
    }
  });

  useEffect(() => {
    console.log(data?.characters.characters)
  }, [data]);

  return (
    <section>
      init
    </section>
  );
};

export default App;