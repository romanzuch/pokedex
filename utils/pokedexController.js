import axios from "axios";

async function getPokemonList(setPokemon) {
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
        console.log(e);
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

function setBackgroundColor(type) {
    console.log(type);
}

export { navigateNext, navigateBack, getPokemonList, getPokemonDetails, setBackgroundColor };