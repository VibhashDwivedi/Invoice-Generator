import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const UserDetail = () => {

    const{formData1} = useContext(InvoiceContext)
  return (
   <>
   <div>  {formData1.yourName}</div>
        <div>
        {formData1.country}
        </div>
   </>
  )
}

export default UserDetail