import React from "react";
import Row from "../Row/Row";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import requests from "../../api/requests.js";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
