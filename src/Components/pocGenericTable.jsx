import React from 'react'
import TableComp from './table'



const PocTableGeneric = () => {
  

  const products = {
    data:[
          [{ href: 'https://www.google.com/', text: 'watch' }, 3, '01/01/2020'],
          [{ href: 'https://www.ynet.co.il/news/category/187', text: 'PC' }, 1, '01/01/2020'],
        ],
    
    headers: ['Product', 'Oty', 'Date'],

    columnsTypes: ['link', 'number', 'string'],
  }

  const users = {
    data:[
          ['John Doe', 28, <TableComp headers={products.headers} data={products.data} columnsTypes={products.columnsTypes}/>],
          ['Carlos Martinez', 23, <TableComp headers={products.headers} data={products.data} columnsTypes={products.columnsTypes}/>],
        ],
      
    headers: ['Name', 'Age', 'Details'],
    
    columnsTypes: ['string', 'number', 'component']
  }


  return (
    <div>
      <h1>User Information</h1>
      <TableComp headers={users.headers} data={users.data} columnsTypes={users.columnsTypes} />
    </div>
  )
}

export default PocTableGeneric