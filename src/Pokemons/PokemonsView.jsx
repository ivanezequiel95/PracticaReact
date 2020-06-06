import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import * as PokemonsService from './PokemonsService'
import PokemonsFilter from './PokemonsFilter'


const PokemonsView = () => {

    const [pokemons, setPokemons] = useState(null);
    const [filter, setFilter] = useState(null);
    const [error, setError] = useState({
        isError: false,
        errorMessage: ''
    });


    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await PokemonsService.getPokemons(filter);
            setPokemons(response);
            }
            catch (err) {
                setError({ isError: true, errorMessage: err.message });
            }
        }
        
        getPokemons();

    }, [filter]);

    const handleSubmit = (filter) => {
        setFilter(filter);
    }

    const renderPokemons = (pokemon) => {
        return (
            <tr key={pokemon.id}>
                <td>{pokemon.id}</td>
                <td>{pokemon.name}</td>
            </tr >
        )
    }

    return (
        <>
            <PokemonsFilter onSubmit={handleSubmit} />
            {error.isError &&
                <Alert variant="danger">
                    {error.errorMessage}
                </Alert>
            }
            <Table>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons && pokemons.map((pokemon) => renderPokemons(pokemon))}
                </tbody>
            </Table>
        </>
    )
}

export default PokemonsView;