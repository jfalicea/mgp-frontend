import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'



class Navbar extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  componentWillMount(){
  }
  render(){
    return(<>
      <nav>
        <div className="logo"> 
          <h2>Restaurant Popup</h2>
        </div>
        <div className="nav-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/account-history">My Account</Link></li>
          </ul>
        </div>
      </nav>

   
      
    </>)
  }
}
export default Navbar;

