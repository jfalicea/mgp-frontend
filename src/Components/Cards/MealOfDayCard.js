import React from 'react';
function MealOfDayCard(props){
  return(
<div className="card">
    <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src="sample-1.jpg" />
    </div>
    <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">Card Title</span>
    <p>{props.mealDetails.ingreds}  {props.mealDetails.price}</p>
    </div>
</div>
  )
}
export default MealOfDayCard;