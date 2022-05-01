// styling
import styles from '../../styles/Controller.module.css';

// icons
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// util functions
import { navigatePokedex } from '../../utils/pokedexController';

// tooltip
import Tooltip from '@mui/material/Tooltip';

export default function PokedexController(props) {
    return (
        <div className={styles.pokedexController}>
            <div className={styles.pokedexControllerInfo}>
                <h2 className={styles.pokemonNumberWrapper}>
                    Nr. <span className={styles.pokedexPokemonNumber}>25</span>
                </h2>
                <h2 
                    className={styles.pokedexPokemonName}
                >
                    {`Pikachu`}
                </h2>
                <Tooltip title='Info' placement='top'>
                    <InfoOutlinedIcon 
                        className={styles.pokedexInfoButton}
                    />
                </Tooltip>
            </div>
            <div className={styles.pokedexControllerElementsContainer}>
                <Tooltip title='Previous' placement='top'>
                    <KeyboardArrowUpIcon 
                        fontSize='large' 
                        className={styles.pokedexControllerElement} 
                        onClick={(buttonProps) => navigatePokedex(buttonProps)}
                    />
                </Tooltip>
                <Tooltip title='Next' placement='bottom'>
                    <KeyboardArrowDownIcon 
                        fontSize='large' 
                        className={styles.pokedexControllerElement} 
                        onClick={(buttonProps) => navigatePokedex(buttonProps)}
                    />
                </Tooltip>
            </div>
        </div>
    ) 
}