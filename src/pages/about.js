import React from 'react';
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

class aboutUs extends React.Component{
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
                about us go here! 
            </p>
        </main>
        <Footer />
    </>)
  }
}
export default aboutUs;