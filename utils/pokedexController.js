import axios from "axios";

async function getPokemonList(id, setPokemon, setApiState) {
    let baseUrl = "https://pokeapi.co/api/v2/pokemon"
    let requstUrl = `${baseUrl}?limit=150`
    try {
        let _ = await axios.get(requstUrl)
        .then((res) => {
            let data = res.data;
            setPokemon(data);
        });
    } catch (e) {
        console.log(typeof(e));
        return e;
    }
}

async function getPokemonDetails(id, setPokemon) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    let _ = await axios.get(url)
    .then((res) => {
        let data = res.data;
        setPokemon(data);
    })
}

function navigateNext(id) {
    return true;
}

function navigateBack(id) {
    if (id === 1) {
        return false;
    } else {
        return true;
    }
}

export { navigateNext, navigateBack, getPokemonList, getPokemonDetails };