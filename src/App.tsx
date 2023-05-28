import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import CharactersPage from "./pages/CharactersPage";
import LocationsPage from "./pages/LocationsPage";
import EpisodesPage from "./pages/EpisodesPage";
import CharacterDetails from "./pages/CharacterDetails";
import LocationDetails from "./pages/LocationDetails";

const App: React.FC = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path={"/"} element={<CharactersPage />} />
        <Route path={"/characters/:id"} element={<CharacterDetails />} />
        <Route path={"/locations"} element={<LocationsPage />} />
        <Route path={"/locations/:id"} element={<LocationDetails />} />
        <Route path={"/episodes"} element={<EpisodesPage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;