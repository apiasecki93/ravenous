import React from 'react';
import './App.css'; 
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import logo from './logo.svg';
import './App.css';

function App() {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        {searchBar}
        {businessList}
      </div>
    )
  }
}

export default App;
