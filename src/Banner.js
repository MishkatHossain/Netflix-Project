import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './Request';


function Banner(){
    
    const [movie, setMovies] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
        
            
            
            
            
            console.log(request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]);
        }
        fetchData();
    },[]);
    
    
    return ( 
        <header>
            
        </header>
     );
}
 
export default Banner;