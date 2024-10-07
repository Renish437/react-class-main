import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardDefault } from '../Components/CardDefault'

const Services = () => {

  const [data, setData] = useState()
  // const [load, setLoad] = useState()
  // const [err, setErr] = useState()

  const getData= async ()=>{
// setLoad(true);
try {
  const response=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
 setData(response.data);
// setLoad(false);
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


// if(load){
//   return <h1>Loading...</h1>
// }


  return (
    <div className='grid grid-cols-3 gap-6 p-5 sm:grid-cols-1 '>

      {data && data.categories.map((cat,index)=>{
        return(
      
            <CardDefault key={cat.idCategory} cata={cat}/>
       
        )
      })}



    </div>
  )
}

export default Services