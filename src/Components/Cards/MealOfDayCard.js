import React from 'react';
import './MealCard.css'



function MealOfDayCard(props){
  return(<>
    <div className="card">
       <div className='pic-container'>
         <img src="sample-1.jpg" alt="" />
       </div>
       <div className="card-text"> 
        <span>{props.mealInfo.mealName}</span>
        <p>{props.mealInfo.mealDetails.ingreds}</p>
        <p>{props.mealInfo.mealDetails.price}</p>
       </div>
    </div>
  </>)
}
export default MealOfDayCard;