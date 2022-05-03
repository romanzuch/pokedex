import '../styles/globals.css'
import PokedexHeader from '../components/PokedexHeader';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
