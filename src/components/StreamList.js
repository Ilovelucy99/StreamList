import React, { useState } from 'react';

//import React from 'react';
/*
function MyStreamList() {
  return (
    <div>
      <h2>StreamList Page</h2>
      <p>This page IS BEING BUILT NOW.</p>
    </div>
  );
}
*/

function StreamList() {


  const [movie, setMovie] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleChange = (e) => {
    setMovie(e.target.value);
  };

  const handleAddMovie = () => {
    if (movie) {
      setMovieList([...movieList, movie]);
      setMovie('');
      console.log(movieList);
    }
  };



  return (

//    <p>CHRISTIAN HERE...</p>

    
    <div className="stream-list">
      <h1>StreamList - Your Personalized Movie List</h1>
      <img src="./images/CGpick.png"
></img>
      <input
        type="text"
        value={movie}
        onChange={handleChange}
        placeholder="Enter a movie or program"
      />
      <button onClick={handleAddMovie}>Add to List</button>
      <h3>Your List</h3>
      <ul>
        {movieList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>


  );
}

export default StreamList