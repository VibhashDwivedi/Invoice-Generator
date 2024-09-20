import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const InvoiceDetail = () => {
    const{formData2} = useContext(InvoiceContext)
  return (
    <div>
        {/* <div className='d-flex'>
            <div>
              {formData2.invoiceDate}:
            </div >
            <div className='mx-3'>{formData2.IDate}</div>
          </div>
        <div className='d-flex mt-1'>
            <div>
              {formData2.dueDate}:
            </div>
            <div className='mx-3'>{formData2.DDate}</div>
          </div> */}
          <div className="d-flex">
            <div>
            <div> {formData2.invoiceDate}:</div>
            <div> {formData2.dueDate}:</div>
            </div>
            <div className='mx-3'>
            <div className=''>{formData2.IDate}</div>
            <div className=''>{formData2.DDate}</div>
            </div>
          
          </div>
    </div>
  )
}

export default InvoiceDetail