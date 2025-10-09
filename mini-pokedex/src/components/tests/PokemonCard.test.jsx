import { render, screen } from '@testing-library/react';
import { expect, vi } from 'vitest';
import PokemonCard from '../../src/components/PokemonCard/PokemonCard';

const mockPokemon = {
    id: 1,
    name: 'bulbasaur',
    sprites: { front_default: 'bulba.png' },
    types: ['grass', 'poison']
};

describe('PokemonCard', () => {
    it('renderiza nombre e imagen', () => {
        render(<PokemonCard pokemon={mockPokemon} />);
        expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', 'bulba.png');
    });

    it('muestra los tipos como etiquetas', () => {
        render(<PokemonCard pokemon={mockPokemon} />);
        expect(screen.getByText('grass')).toBeInTheDocument();
        expect(screen.getByText('poison')).toBeInTheDocument();
    });
});