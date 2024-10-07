import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CardDefault } from '../Components/CardDefault'



const HomePage = () => {

  const [data, setData] = useState()
  // const [load, setLoad] = useState()
 

  const getData= async ()=>{

try {
  const response=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
 setData(response.data);

} 
catch (err) {

  console.log(err.message);
}  }

useEffect(() => {
  getData();
}, [])

 console.log(data);





  return (
    <div>
    
 <div className='grid grid-cols-3 gap-6 p-5 sm:grid-cols-1 '>

{data && data.categories.map((cat,index)=>{
  return(

      <CardDefault key={cat.idCategory} cata={cat}/>
 
  )
})}




</div>
    </div>
   
  )
}

export default HomePage