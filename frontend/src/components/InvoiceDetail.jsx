import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const InvoiceDetail = () => {
    const{formData2} = useContext(InvoiceContext)
  return (
    <div>
        <div className='d-flex'>
            <div>
              {formData2.invoiceDate}:
            </div>
            <div>{formData2.IDate}</div>
          </div>
        <div className='d-flex'>
            <div>
              {formData2.dueDate}:
            </div>
            <div>{formData2.DDate}</div>
          </div>
    </div>
  )
}

export default InvoiceDetail