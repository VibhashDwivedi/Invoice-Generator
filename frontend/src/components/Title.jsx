import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const Title = () => {
    const {title} = useContext(InvoiceContext);
  return (
   <div className="fs-3 fw-medium">
    {title}
   </div>
  )
}

export default Title