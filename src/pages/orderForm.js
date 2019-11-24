import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import TableBody from '../Components/Table/TableBody';

class orderForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      headings: ["Date","Description","Price", "Qty"], 
      tableData:[{mealName: "chicken", date: "12/25/2019",price: "10.99",Qty: "3"}]
    };
  }

  

  render(){
    return(<>
        <Navbar />
        <h1> this is the order form</h1>
        <TableBody headings={this.state.headings} tableData={this.state.tableData}/>
    </>)
  }
}
export default orderForm;