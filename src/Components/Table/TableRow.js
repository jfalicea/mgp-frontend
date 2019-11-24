import React from 'react';




function TableRow(props){
    console.log("///", props)
  return(<>
    <tr>
        <td>{props.row.date}</td>
        <td>{props.row.mealName}</td>
        <td>{props.row.price}</td>
        <td>{props.row.Qty}</td>
    </tr>    
  </>)
}
export default TableRow;