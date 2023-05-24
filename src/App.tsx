import { ALL_CHARACTERS } from "./apollo/queries/characters";
import { IAllCharacatersResponse } from "./types/hooks";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import CharactersPage from "./pages/CharactersPage";

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
    <RootLayout>
      <Routes>
        <Route path={"/"} element={<CharactersPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;