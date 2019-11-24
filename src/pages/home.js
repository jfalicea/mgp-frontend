import Navbar from '../Components/Navbar/Navbar'
import Title from '../Components/Titles/Title'
import React from 'react';
import MealOfDayCard from '../Components/Cards/MealOfDayCard';
import OrderNowBtn from '../Components/Buttons/OrderNowBtn';
import MealCounter from '../Components/Counter/MealCounter';
import Footer from '../Components/Footer/Footer';
import './index.css'
import { Link } from 'react-router-dom'



class home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mealInfo:{
        mealName: 'Pasta', 
        mealDetails:{
          ingreds:"lots of food stuff", 
          price: "$10.99",
          numOfPlates : "25"
        }
      }
    };
  }

  render(){
    return(<>
    <header>
      <Navbar />
    </header>
    <main>
        {/* <div className="container"> */}
          <Title mealName={this.state.mealInfo.mealName} />
          <div className='row'> 
            <div className="col s12 m8" >
                <MealOfDayCard mealDetails={{...this.state.mealInfo.mealDetails}} />
            </div>
            <div className="counter col s12 m4">
              <div className="row">
                <div className="col s6 m12"> 
                  <OrderNowBtn />  
                </div>
                <div className="col s6 m12"> 
                  <MealCounter mealDetails={{...this.state.mealInfo.mealDetails}} />
                </div>
              </div>
            </div>
          </div>  
        {/* </div> */}
        <ul>
        <li><Link to="/account-history">Account History</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/past-meals">Past Meals</Link></li>
        </ul>
    </main>
        <Footer />
    </>)
  }
}
export default home;