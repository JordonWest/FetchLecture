import './App.css';
import api from "./api/api.js"
import React, { useState } from 'react';

const App = () => {
  let [response, setResponse] = useState('')

  const getHandler = () => {
    api.getFetch()
    .then((apiResponseJSON) => {
      setResponse(apiResponseJSON)
    })
  }
  const postHandler = () => {
    api.postFetch()
    .then((apiResponseJSON) => {
      setResponse(apiResponseJSON)
    })
  }

  return (
    <div className="App">
      <button onClick={ getHandler }> GET </button>
      <button onClick={ postHandler }> POST </button>
      <h2>{ response.response }</h2>

    </div>
  );
}

export default App;
