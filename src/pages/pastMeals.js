import React from 'react';
import NavbarShell from '../Components/Navbar/NavbarShell'
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
            <NavbarShell />
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