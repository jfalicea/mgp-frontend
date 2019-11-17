import NavbarShell from '../Components/Navbar/NavbarShell'
import Title from '../Components/Titles/Title'
import React from 'react';
import MealOfDayCard from '../Components/Cards/MealOfDayCard';
import OrderNowBtn from '../Components/Buttons/OrderNowBtn';
import MealCounter from '../Components/Counter/MealCounter';
import Footer from '../Components/Footer/Footer';
import './index.css'
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
      <NavbarShell />
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
        <Footer />
    </>)
  }
}
export default home;