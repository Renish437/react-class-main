import React from 'react'
import { mealCategories } from '../data/data'

const About = () => {
  return (
    <>
    <div className='heading'>Our Services</div>

<div>
{mealCategories.categories.map(({idCategory,categoryName,categoryImage,categoryDescription})=>{
return <div className='flex justify-center space-x-5' key={idCategory}>
  <h1>{categoryName}</h1>
  <img src={categoryImage} alt="" />
</div>
})}
</div>

   
    </>
  )
}

export default About