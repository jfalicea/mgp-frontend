import NavbarShell from '../Components/Navbar/NavbarShell'
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
          price: "$10.99"
        }
      }
    };
  }

  render(){
    return(<>
    <header>
      <NavbarShell />
    </header>
    <main>
        <div className="container">
          <Title mealName={this.state.mealInfo.mealName} />
          <div className='row'> 
              <div className="col s12">
                  <MealOfDayCard mealDetails={{...this.state.mealInfo.mealDetails}} />
              </div>
          </div>  
          <div className="counter">
            <MealCounter />
            <OrderNowBtn />  
          </div>
        </div>
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