import { ALL_CHARACTERS } from "./apollo/queries/characters";
import { IAllCharacatersResponse } from "./types/hooks";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import CharactersPage from "./pages/CharactersPage";
import LocationsPage from "./pages/LocationsPage";

const App: React.FC = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path={"/"} element={<CharactersPage />} />
        <Route path={"/locations"} element={<LocationsPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;