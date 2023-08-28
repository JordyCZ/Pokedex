import AppRouter from "../src/components/AppRouter/index";
import PokemonProvider from "./components/Context/PokemonProvider";
function App() {
  return (
    <PokemonProvider>
      <AppRouter />;
    </PokemonProvider>
  );
}

export default App;
