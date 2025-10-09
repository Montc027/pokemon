import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList onSelect={(n) => window.alert(`Ir a /pokemon/${n}`)} />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;