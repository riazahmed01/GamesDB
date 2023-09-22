import React, { useEffect, useState } from 'react'; // Import useState
import api from '../jsx files/Api.jsx';

function Genre() {
  const [genreData, setGenreData] = useState([]); // Use a more descriptive variable name

  useEffect(() => {
    // Define the getGenre function before using it
    const getGenre = async () => {
      try {
        const response = await api.getGenre();
        setGenreData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getGenre(); // Call getGenre here

  }, []);

  return (
    <div>
      <h2 className='text-[40px] font-bold'>Genre</h2>
      {/* Render the genreData here */}
      <ul>
        {genreData.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Genre;