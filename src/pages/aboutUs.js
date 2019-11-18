import React from 'react';
import NavbarShell from '../Components/Navbar/NavbarShell'
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
            <NavbarShell />
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