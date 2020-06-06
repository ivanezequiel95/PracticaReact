import axios from 'axios'

const API_POKEMONS = 'https://5e94840cf591cb0016d81291.mockapi.io/api/pokemons';


const getPokemons = async (filter) => {
    const response = await axios.get(API_POKEMONS);

    const data = (
        filter  ?
            response.data.filter((e) => {
                return filter.nombre === e.name || filter.numero === e.id
            })
        :
        response.data
    )

    return data;
}

export {
    getPokemons,
}