import React from 'react';
import { Link } from 'react-router-dom'



class NavbarShell extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }
  componentWillMount(){
  }
  render(){
    return(<>
      <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">Mobile Gourmet Popup</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="sass.html">Sass</Link></li>
            <li><Link to="badges.html">Components</Link></li>
            <li><Link to="collapsible.html">JavaScript</Link></li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
      
    </>)
  }
}
export default NavbarShell;

