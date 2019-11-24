import React from 'react';


class MealCounter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    };
  }
  componentWillMount () {
    this.setState({
      mealDetails: this.props.mealDetails
    })
  }
  render(){
    let msg 
    if(!this.state.mealDetails){
      msg = 'Loading.... '
    }
    console.log(this.props.mealDetails)
    return(<>
      {msg}
      <div className="container"> 
        <div className="row">
          <h4>meal counter!</h4>
         <div className="container"> 
          <h4>{this.state.mealDetails.numOfPlates}</h4>
         </div>
        </div>

      </div>
    </>)
  }
}
export default MealCounter;