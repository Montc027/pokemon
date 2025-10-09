import PokemonList from './components/PokemonList/PokemonList';
import './styles/globals.scss';   

function App() {
  return (
    <main>
      <h1>Mini Pokédex</h1>
      <PokemonList onSelect={(name) => console.log('Ver detalle de', name)} />
    </main>
  );
}