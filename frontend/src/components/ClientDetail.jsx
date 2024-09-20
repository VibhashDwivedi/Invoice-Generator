import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const ClientDetail = () => {
    const{formData} = useContext(InvoiceContext)
  return (
    <div>
        <div>
            {formData.clientName}
          </div>
          <div>
            {formData.country}
          </div>
    </div>
  )
}

export default ClientDetail