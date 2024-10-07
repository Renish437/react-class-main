import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ItemDetail = () => {
  const [data, setData] = useState(null);
//   const [load, setLoad] = useState(false);
  // const [err, setErr] = useState()

  const { id } = useParams();
  
  const getData = async () => {
    // setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php', {
        params: {
          i: id,
        },
      });
      setData(response.data);
    //   setLoad(false);
    } catch (err) {
      console.log(err.message);
      // setErr(err.message);
    //   setLoad(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

//   if (load) {
//     return <h1>Loading...</h1>;
//   }

  const meal = data?.meals ? data.meals[0] : null;
  
  if (!meal) {
    return <h1>No meal found</h1>;
  }

  const key = meal?.strYoutube?.split('=')[1];
  const ingredients = [];

  for (let i = 1; i <= 10; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  return (
    <div>
      <div className="p-6">
        <p className="flex items-center justify-center mb-8 text-5xl">{meal.strMeal}</p>
        <div className='p-2 text-center'>
        <div className="text-3xl">Famous in {meal.strArea} group</div>
       </div>
        <div className="flex items-center justify-center">
          {key && (
         <iframe
         className="h-[400px] w-[1300px] sm:w-[550px]"
         src={`https://www.youtube.com/embed/${key}?cc_lang_pref=es&cc_load_policy=1`}
         title={meal.strMeal}
         allowFullScreen

       />
          )}
        </div>

<div className='grid grid-cols-2'>
<div className="row-auto m-6 space-x-3 ">
          <p className="m-2 text-3xl text-center">Process for {meal.strMeal}</p>
          <p className='text-xl'>{meal.strInstructions}</p>
          </div>
        
        <div className="p-6 ">
          <h3 className='text-3xl text-center'>Ingredients for {meal.strMeal}</h3>
          <ul className='mx-16 mt-3 text-center sm:px-4'>
            {ingredients.map((ingredient, index) => (
              <li className='text-xl' key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
       
</div>
        

      </div>
    </div>
  );
};

export default ItemDetail;
