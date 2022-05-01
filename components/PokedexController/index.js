import styles from '../../styles/Controller.module.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InfoIcon from '@mui/icons-material/Info';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function PokedexController() {
    return (
        <div className={styles.pokedexController}>
            <div className={styles.pokedexControllerInfo}>
                <h2 className={styles.pokedexPokemonNumber}>{`Nr. 25`}</h2>
                <h2 className={styles.pokedexPokemonName}>{`Pikachu`}</h2>
                <InfoOutlinedIcon />
            </div>
            <div className={styles.pokedexControllerElementsContainer}>
                <KeyboardArrowUpIcon fontSize='large' className={styles.pokedexControllerElement} />
                <KeyboardArrowDownIcon fontSize='large' className={styles.pokedexControllerElement} />
            </div>
        </div>
    ) 
}