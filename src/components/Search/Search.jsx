import { useState, useEffect } from 'react';
import axios from 'axios';

import GifsList from '../GifsList/GifsList';

function Search () {
  
  const searchNow = () => {
    console.log('in searchNow():', searchText);
    
    // Giphy API url
    const url = `https://api.giphy.com/v1/gifs/search?api_key=aEOhN95bedzzJ2zSiOkbLgPnMeRc1UuP&q=${searchText}&limit=4&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    // Axios GET call to Giphy
    axios.get(url)
      .then(response => {
        console.log('response.data:', response.data);
        setGifs(response.data.data);
    })
      .then(error => {
        console.log('error:', error);
    })
  };

  const [searchText, setSearchText] = useState('');
  const [gifs, setGifs] = useState([]);

  return (
    <div>
      <h1>Giphy Search</h1>
      <input 
        onChange={(e) => setSearchText(e.target.value)}
        type="text" 
        placeholder="Search Giphy" 
      />
      <button onClick={searchNow}>Search</button>
      <div>
        <GifsList gifs={gifs} />
      </div>
    </div>
  );

}

export default Search;

