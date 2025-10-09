import axios from 'axios';

const BASE = 'https://pokeapi.co/api/v2';

export const getFirst50Pokemon = async () => {
    const { data } = await axios.get(`${BASE}/pokemon?limit=50`);
    
    return data.results;
};

export const getPokemonDetail = async (idOrName) => {
    const { data } = await axios.get(`${BASE}/pokemon/${idOrName}`);
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
        types: data.types.map(t => t.type.name), 
        weight: data.weight,
        height: data.height
    };
};

export const getTypes = async () => {
    const { data } = await axios.get(`${BASE}/type`);
    return data.results.map(t => t.name); 
};