// styling
import styles from '../../styles/Controller.module.css';

// icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// util functions
import { navigateNext, navigateBack, getPokemonList } from '../../utils/pokedexController';
import { useRouter } from 'next/router';

// tooltip
import Tooltip from '@mui/material/Tooltip';

// helpers
import { useState, useEffect } from 'react';

export default function PokedexController(props) {

    const [pokemonId, setPokemonId] = useState(1); // this is used to store the id of the last pokemon
    const [pokemon, setPokemon] = useState(0); // this is used to store the information of the pokemon
    const [apiState, setApiState] = useState(0); // used to fetch errors
    const [update, setUpdate] = useState(false); 

    const router = useRouter();

    useEffect(() => {
        getPokemonList(setPokemon);
        router.push(`pokemon?id=${pokemonId}`)
    }, [update, pokemonId]);

    return (
        <div className={styles.pokedexController}>
            <div className={styles.pokedexControllerInfo}>
                <h2 className={styles.pokemonNumberWrapper}>
                    Nr. <span className={styles.pokedexPokemonNumber}>
                        { pokemon ? (<>{pokemonId}</>) : (<></>) }
                        </span>
                </h2>
                <h2 
                    className={styles.pokedexPokemonName}
                >
                    { pokemon ? (<>{pokemon.results[pokemonId-1].name}</>) : (<></>)}
                </h2>
                <Tooltip title='Info' placement='top'>
                    <InfoOutlinedIcon 
                        className={styles.pokedexInfoButton}
                    />
                </Tooltip>
            </div>
            <div className={styles.pokedexControllerElementsContainer}>
                {
                    (pokemonId === 1) ? (
                        <Tooltip title='Previous' placement='top'>
                            <KeyboardArrowUpIcon 
                                fontSize='large' 
                                className={styles.pokedexControllerElementDisabled}
                            />
                        </Tooltip>
                     ) : (
                        <Tooltip title='Previous' placement='top'>
                            <KeyboardArrowUpIcon 
                                fontSize='large' 
                                className={styles.pokedexControllerElement} 
                                onClick={() => {
                                    if (navigateBack(pokemonId)) {
                                        let newId = pokemonId -1;
                                        setPokemonId(newId);
                                    } else {
                                        console.log(false);
                                    }
                                }}
                            />
                        </Tooltip>
                    )
                }
                <Tooltip title='Next' placement='bottom'>
                    <KeyboardArrowDownIcon 
                        fontSize='large' 
                        className={styles.pokedexControllerElement} 
                        onClick={() => {
                            if (navigateNext(pokemonId)) {
                                let newId = pokemonId + 1;
                                setPokemonId(newId);
                            } else {
                                console.log(false);
                            }
                        }}
                    />
                </Tooltip>
            </div>
        </div>
    ) 
}