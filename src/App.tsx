import { FC } from "react";
import { Root } from "./pages/Root";
import { Route, Routes } from "react-router"
import Characters from "./pages/Characters"
import CharacterDetails from "./pages/CharacterDetails"

enum Links {
  characters = "/",
  characterDetails = "/characterDetails/:id"
}

const App: FC = () => {
  return (
    <Root>
      <Routes>
        <Route path={Links.characters} element={<Characters />} />  
        <Route path={Links.characterDetails} element={<CharacterDetails />} />
      </Routes>
    </Root>
  );
}

export default App;