import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const Place = () => {

    const{place} = useContext(InvoiceContext);
  return (
    <div>
        Place of Supply: {place}
    </div>
  )
}

export default Place