import { getPokemonDetails } from "../utils/pokedexController";
import { artworkBaseUrl } from '../utils/constants';
import styles from '../styles/Pokemon.module.css';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Pokemon(props) {

    const [pokemon, setPokemon] = useState();
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        console.log(props.id);
        getPokemonDetails(props.id, setPokemon);
    }, [update, props])

    return (
      <div>
        {
            pokemon ? (
                <div className={styles.PokemonContainer}>
                    <Image src={`${artworkBaseUrl}${pokemon.id}.png`} height={512} width={512} alt='pokémon image' />
                </div>
            ) : (
                <h1 onClick={() => {console.log(pokemon)}}>no pokemon found</h1>
            )
        }
      </div>
    )
}

export async function getServerSideProps({query}) {
    let pokemonId = query.id;

    return {
        props: {
            id: pokemonId || null,
        }
    }
}