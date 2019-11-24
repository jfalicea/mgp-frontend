import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
class pastMeals extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(<>
        <header>
            <Navbar />
        </header>
        <main>
            <p>
                FAQs go here! 
            </p>
        </main>
        <Footer />
    </>)
  }
}
export default pastMeals;