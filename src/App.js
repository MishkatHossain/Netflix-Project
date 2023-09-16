import React from 'react';
import './App.css';
import requests from './Request';
import Row from './Row';
import Banner from './Banner'


function App() {


  return (
    <div className="App">
      
      <Banner/>
      <Row 
          title="NETFLIX ORIGINALS" 
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries}/>
    </div>
  );
}

export default App;

//      0086e365e433898fe9754d6211e1bb31
//      0086e365e433898fe9754d6211e1bb31

// https://api.themoviedb.org/3/movie/157336?api_key=0086e365e433898fe9754d6211e1bb31