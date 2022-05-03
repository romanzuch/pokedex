// styling
import styles from '../../styles/Controller.module.css';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// util functions
import { navigateNext, navigateBack, getPokemonList } from '../../utils/pokedexController';

// tooltip
import Tooltip from '@mui/material/Tooltip';

// helpers
import { useState, useEffect } from 'react';

export default function PokedexController({id, setId}) {

    const [pokemonList, setPokemonList] = useState(0); // this is used to store the information of the pokemon
    const [apiState, setApiState] = useState(0); // used to fetch errors
    const [update, setUpdate] = useState(false); 

    useEffect(() => {
        getPokemonList(setPokemonList);
    }, [update, id]);

    return (
        <div className={styles.pokedexController}>
            <div className={styles.pokedexControllerInfo}>
                <h2 className={styles.pokemonNumberWrapper}>
                    Nr. <span className={styles.pokedexPokemonNumber}>
                        { pokemonList ? (<>{id}</>) : (<></>) }
                        </span>
                </h2>
                <div className={styles.pokedexPokemonNameWrapper}>
                    <h2 
                        className={styles.pokedexPokemonName}
                    >
                        { pokemonList ? (<>{pokemonList.results[id-1].name}</>) : (<></>)}
                    </h2>
                </div>
            </div>
            <div className={styles.pokedexControllerElementsContainer}>
                {
                    (id === 1) ? (
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
                                    if (navigateBack(id)) {
                                        let newId = id -1;
                                        setId(newId);
                                    } else {
                                        console.log(false);
                                    }
                                }}
                            />
                        </Tooltip>
                    )
                }
                {
                    (id === 150) ? (
                        <Tooltip title='Next' placement='bottom'>
                            <KeyboardArrowUpIcon 
                                fontSize='large' 
                                className={styles.pokedexControllerElementDisabled}
                            />
                        </Tooltip>
                    ) : (
                        <Tooltip title='Next' placement='bottom'>
                            <KeyboardArrowDownIcon 
                                fontSize='large' 
                                className={styles.pokedexControllerElement} 
                                onClick={() => {
                                    if (navigateNext(id)) {
                                        let newId = id + 1;
                                        setId(newId);
                                    } else {
                                        console.log(false);
                                    }
                                }}
                            />
                        </Tooltip>
                    )
                }
            </div>
        </div>
    ) 
}