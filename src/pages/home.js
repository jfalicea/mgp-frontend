import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Titles/Title'
import MealOfDayCard from '../Components/Cards/MealOfDayCard';
import OrderNowBtn from '../Components/Buttons/OrderNowBtn';
import MealCounter from '../Components/Counter/MealCounter';
import Footer from '../Components/Footer/Footer';
import './index.css'
import * as orderSevice from './services/order.service';


class home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mealInfo:{
        mealName: 'Pasta', 
        mealDetails:{
          ingreds:"lots of food stuff", 
          mealText: "loremloremloremloremlorem loremloremloremloremloremloremloremloremloremloremloremloremlorem",
          price: "$10.99",
          numOfPlates : "25"
        }
      }
    };
  }
  foo(x){
    const foobar = orderService.coool(x);
    this.setState({
      foobar
    })
  }
  render(){
    return(<>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="img-container">
          <div className="img">
        </div>
        <div className="mealInfo">
          <h1>Today's meal is: {this.state.mealInfo.mealName}</h1>
          <h3 className="mealDetailsHeading"><strong>Ingredients:</strong></h3> {this.state.mealInfo.mealDetails.ingreds} 
          <br /><br />
          <h3 className="mealDetailsHeading"><strong>About this meal:</strong></h3> {this.state.mealInfo.mealDetails.mealText} 
          <br /><br />
          <h3 className="mealDetailsHeading"><strong>Price:</strong></h3> {this.state.mealInfo.mealDetails.price} 
        </div>
      </div>
      <div className="mealInfo-container">
        <div className="buttonGroup">
          <OrderNowBtn />
          <MealCounter mealDetails={{...this.state.mealInfo.mealDetails}} />
        </div>
      </div>








        
        {/* <ul>
        <li><Link to="/account-history">Account History</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/past-meals">Past Meals</Link></li>
        </ul> */}
    </main>
        <Footer />
    </>)
  }
}
export default home;