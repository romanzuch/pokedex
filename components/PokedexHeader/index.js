import PokedexController from "../PokedexController";
import styles from '../../styles/Home.module.css'

export default function PokedexHeader() {
    return (
        <div className={styles.container}>
            <h1 className={styles.pokedexHeader1}>Pokédex</h1>
            <PokedexController />
        </div>
    );
}