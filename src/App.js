import React from 'react';
import './Component/App.css';
import Hero from './Component/Hero';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FullCard from './Component/FullCard';
import Button from './Component/Button';

function App() {
  const [lists, setLists] = useState([]);
  const url = 'https://swapi.dev/api/people/?page=5';
  useEffect(() => {
    axios.get(url).then((response) => {
      setLists(response.data.results);
    });
  }, [url]);
  if (lists) {
    lists.map((list) => list);
  }

  return (
    <div>
      {/* // <>
        //  <Hero lists = {lists} />
        // </> */}
      <Button />
      <Router>
        <Route exact path="/" children={<Hero lists={lists} />} />
        <Route
          exact
          path="/cards/:personName"
          children={<FullCard lists={lists} />}
        />
      </Router>
    </div>
  );
}

export default App;
