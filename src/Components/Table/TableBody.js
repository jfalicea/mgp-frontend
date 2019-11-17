import React from 'react';
import TableHeader from './TableHeader'
import TableRow from './TableRow'
class TableBody extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        console.log(this.props.headings)
        console.log("++",this.props.tableData)
        this.setState({
            tableInfo: {headings:this.props.headings,
            tableData:this.props.tableData}
        })
    }

    render(){  
        let msg
        if(!this.state.tableInfo){
            return  msg = "Loading..."
        }
        // headings = this.state.headings.map((heading, i)=>{
        //     return <TableHeader key={i} heading={heading} />
        // })
        // if(!this.state.tableData){
        //     return tableData = "Loading Table Data...."
        // }
        // tableData = this.state.tableData.map((row,i)=>{
        //     return <TableRow key={i} row={row} />
        // })
        return(<>
            {msg}
            <table className="highlight ">
                <thead>
                    <tr>
                        {/* {headings} */}
                    </tr>
                </thead>
                <tbody>
                    {/* {tableData} */}
                </tbody>
            </table>
        </>)
    }
}
export default TableBody;

