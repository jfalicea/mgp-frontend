import React from 'react';
import Button from '@material-ui/core/Button'



class OrderNowBtn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  render(){
    return(<>
        <button className="button">
          <h4>
            Order Now
          </h4>
        </button>
    </>)
  }
}
export default OrderNowBtn;