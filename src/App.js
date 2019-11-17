import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import home from './pages/home'
import orderForm from './pages/orderForm';




function App() {
  return (<>
    <Router>
      <Route exact path="/" component={home}/>
      <Route path="/order-form" component={orderForm}/>
    </Router>
  </>);
}

export default App;
