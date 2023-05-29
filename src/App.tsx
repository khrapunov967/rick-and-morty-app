import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import CharacterDetails from "./pages/CharacterDetails";
import LocationDetails from "./pages/LocationDetails";
import EpisodeDetails from "./pages/EpisodeDetails";

const App: React.FC = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path={"/"} element={<Characters />} />
        <Route path={"/characters/:id"} element={<CharacterDetails />} />
        <Route path={"/locations"} element={<Locations />} />
        <Route path={"/locations/:id"} element={<LocationDetails />} />
        <Route path={"/episodes"} element={<Episodes />} />
        <Route path={"/episodes/:id"} element={<EpisodeDetails />} />
      </Routes>
    </RootLayout>
  );
};

export default App;