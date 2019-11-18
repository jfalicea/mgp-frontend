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
        let headings
        let tableData
        if(!this.state.tableInfo){
            return  msg = "Loading..."
        }
        headings = this.state.tableInfo.headings.map((heading, i)=>{
            return <TableHeader key={i} heading={heading} />
        })
        tableData = this.state.tableInfo.tableData.map((row,i)=>{
            return <TableRow key={i} row={row} />
        })
        console.log(this.state.tableInfo.tableData)
        return(<>
            {msg}
            <table className="highlight ">
                <thead>
                    <tr>
                        {headings}
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </>)
    }
}
export default TableBody;

