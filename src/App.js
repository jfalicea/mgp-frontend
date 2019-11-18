import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import home from './pages/home'
import orderForm from './pages/orderForm';
import accountHistory from './pages/accountHistory';
import faq from './pages/faq';
import aboutUs from './pages/aboutUs';
import pastMeals from './pages/pastMeals';




function App() {
  return (<>
    <Router>
      <Route exact path="/" component={home}/>
      <Route path="/order-form" component={orderForm}/>
      <Route path="/account-history" component={accountHistory}/>
      <Route path="/faq" component={faq}/>
      <Route path="/about-us" component={aboutUs}/>
      <Route path="/past-meals" component={pastMeals}/>
    </Router>
  </>);
}

export default App;
