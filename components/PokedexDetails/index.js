import styles from '../../styles/PokedexDetails.module.css';

function PokedexDetails({pokemon}) {
  return (
    <table className={styles.PokedexDetails}>
        <tr>
            <td>Type</td>
            <td id={styles.PokedexDetailsType} className={styles.PokedexDetailsValue}>{pokemon.types[0].type.name}</td>
        </tr>
        <tr>
            <td>Weight</td>
            <td className={styles.PokedexDetailsValue}>{pokemon.weight/10} kg</td>
        </tr>
        <tr>
            <td>Height</td>
            <td className={styles.PokedexDetailsValue}>{pokemon.height/10} m</td>
        </tr>
        <tr>
            <td>HP</td>
            <td className={styles.PokedexDetailsValue}>{pokemon.stats[0].base_stat}</td>
        </tr>
        <tr>
            <td>Attack</td>
            <td className={styles.PokedexDetailsValue}>{pokemon.stats[1].base_stat}</td>
        </tr>
        <tr>
            <td>Defense</td>
            <td className={styles.PokedexDetailsValue}>{pokemon.stats[2].base_stat}</td>
        </tr>
        <tr>
            <td>Speed</td>
            <td className={styles.PokedexDetailsValue}>{pokemon.stats[5].base_stat}</td>
        </tr>
    </table>
  )
}

export default PokedexDetails;