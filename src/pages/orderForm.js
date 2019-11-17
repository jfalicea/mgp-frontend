import React from 'react';
import NavbarShell from '../Components/Navbar/NavbarShell';
import TableBody from '../Components/Table/TableBody';

class orderForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      headings: ["Date","Description","Price", "Qty"], 
      tableData:[
        {mealName: "chicken", date: "12/25/2019",price: "10.99",Qty: "3"},
        {mealName: "chicken", date: "12/25/2019",price: "10.99",Qty: "3"},
        {mealName: "chicken", date: "12/25/2019",price: "10.99",Qty: "3"}
    ]
    };
  }

  render(){
    return(<>
        <NavbarShell />
        <h1> this is the order form</h1>
        <TableBody headings={this.state.headings} tableData={this.state.tableData}/>
    </>)
  }
}
export default orderForm;