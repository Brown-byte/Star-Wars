import React, { useState, useEffect} from 'react';
import axios from 'axios';

const FilmList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(`https://swapi.dev/api/films`);
            setData(response.data.results);
            setError(null);
          } catch (err) {
            setError(err.message);
            setData(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
    }, []);
      
    console.log(data)
    const reduceLength = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength).trim() + '...';
        } else {
            return text
        }
    }
 
  return (
    <div className='first'>
        {data && data.map(function(movies){
            return (
                <div  key = {movies.id} className="FilmList">
                    <div className='Cards'>
                      
                      <h3 className='title'>{movies.title}</h3>
                      <p className='when'>{new Date(movies.release_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                      <p className='opening-crawl'>{reduceLength(movies.opening_crawl, 260)}</p>
                      <hr className='line'/>
                      <p className='info'>More info</p>
                    
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
}

export default FilmList;