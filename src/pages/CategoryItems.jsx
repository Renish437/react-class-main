import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CardList } from '../Components/CardList'

const CategoryItems = () => {
    const [data, setData] = useState()
    // const [load, setLoad] = useState()
    // const [err, setErr] = useState()

    const {category}=useParams();
    console.log(category);
    
  
    const getData= async ()=>{
//   setLoad(true);
  try {
    const response=await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php',
     {
        params:{
            c:category
        }
     }   );
    
   setData(response.data);
//   setLoad(false);
  } 
  catch (err) {
  
    console.log(err.message);
    // setLoad(false);
    // setErr(err.message);
  
    
  }  }
  
  useEffect(() => {
    getData();
  }, [])
  
   console.log(data);
  
  
//   if(load){
//     return <h1>Loading...</h1>
//   }
  return (
    <div className='flex items-center justify-center '>
{data && <CardList meals={data.meals} category={category} /> }
    </div>
  )
}

export default CategoryItems