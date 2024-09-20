import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const Notes = () => {

    const {formData4} = useContext(InvoiceContext);
    
  return (
    <div>
        <div className='text-muted'>{formData4.notes}</div>
        <div>{formData4.notesDescription}</div>
        <div className='text-muted mt-2'>{formData4.termsConditions}</div>
        <div>{formData4.termsConditionsDescription}</div>
    </div>
  )
}

export default Notes