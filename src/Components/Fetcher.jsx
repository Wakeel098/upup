import React from 'react'
import { useState,useEffect } from 'react';

const Fetcher = () => {

    const [Data, setData] = useState([]);
    const [ loading, setLoading]=useState(true);
  
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(res=>{
            // console.log(res)
            setData(res)
          setLoading(false)

        })
         
    },[])
    //   console.log(Data)

  return (
    <div>
      fdasfdas
     {loading ? (<h1>Loading.......</h1>):(
        <ul style={{ }}>
            {
                Data.map((ele)=>
                    <li key={ele.id}>{ele.title}</li>
                )
            }
            
        </ul>
     )}

    </div>
  )
}

export default Fetcher
