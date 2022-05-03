import PokedexController from "../PokedexController";
import styles from '../../styles/Header.module.css'

export default function PokedexHeader({id, setId}) {
    return (
        <div>
            <h1 className={styles.pokedexHeader1}>Pokédex</h1>
            <PokedexController id={id} setId={setId} />
        </div>
    );
}