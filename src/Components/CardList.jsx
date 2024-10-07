import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router";
 

 
export function CardList({meals,category}) {
    const nav=useNavigate();
  return (
    <Card className="w-[1500px]">
      <CardBody>
        <div className="flex items-center justify-between mb-4 text-center mx-[600px] sm:mx-2">
          <Typography variant="h5" color="blue-gray" className="grid grid-flow-row text-3xl">
             {category} Items
          </Typography>
          
        </div>
        <div className="divide-y divide-gray-200">
          {meals.map(({ idMeal,strMeal, strMealThumb }) => (
            <div
           onClick={()=>nav(`/details/${idMeal}`)}
              key={idMeal}
              className="flex items-center justify-between pt-3 pb-3 cursor-pointer last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="sm" src={strMealThumb}  />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {strMeal}
                  </Typography>
                 
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                ${idMeal}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}