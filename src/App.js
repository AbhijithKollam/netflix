import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Row from './components/Row';
import { requests } from './request';


function App() {
  return (
    <div>
      
      <Navbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="NetflixOriginal" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />

      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />

      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      
    </div>
    
    
  );
}

export default App;
