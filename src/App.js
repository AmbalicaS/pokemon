import "./App.css";
import PokemonComparator from "./Components/PokemonCompareGrid/PokemonComporator";
import Search from "./Components/PokemonSearch/Search";

function App() {
  
  return (
    <div className="App">
      <Search/>
      <PokemonComparator/>
    </div>
  )
}

export default App;
