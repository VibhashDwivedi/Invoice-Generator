import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const Title = () => {
    const {title} = useContext(InvoiceContext);
  return (
   <div className="fs-4 fw-mediu">
    {title}
   </div>
  )
}

export default Title