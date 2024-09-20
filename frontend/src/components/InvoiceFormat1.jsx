import React, { forwardRef, useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'
import Title from './Title'
import UserDetail from './UserDetail'
import Logo from './Logo'
import ClientDetail from './ClientDetail'
import InvoiceDetail from './InvoiceDetail'
import TableData from './Tabledata'
import Summary from './Summary'
import Notes from './Notes'
import Place from './Place'

const InvoiceFormat1 = forwardRef((props, ref) => {

  const{logo, title,formData1, formData, formData2 , headerData, rows, formdata4} = useContext(InvoiceContext)

  
  return (
    <div className='card' ref={ref}>
      <div className="card-body">
       <div className="d-flex">
        <div style={{flex:'2'}} className='mt-2'>
          <Logo />
         <UserDetail />
         
        </div>
        <div>
        <Title/>
        <div className='float-end fw-semibold text-muted'>
          {formData2.invoice}{formData2.invoiceValue}
        </div>
        </div>
       </div>
       <div className="d-flex mt-5">
        <div style={{flex:'2'}}>
          <ClientDetail />
        </div>
        <div style={{flex:'2'}}>
          <InvoiceDetail />
        </div>
       </div>
       <div>
        <Place />
       </div>
       <TableData />
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <Summary />
        </div>
      </div>

      <Notes />
       
       </div>
      
            
       </div>
    
  )
}
)

export default InvoiceFormat1