import React from 'react';
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'


function Table(props) {

  let columns = []
  Object.keys(props.data[0]).map(key=>{
    columns.push({
      Header: key,
      accessor: key
  },)
  })
  let { data } = props
  return (
    <ReactTable
      data={data}
      columns={columns}
    />
  );
}

export default Table;