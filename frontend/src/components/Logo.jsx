import React, { useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const Logo = () => {
    const{logo} = useContext(InvoiceContext)
  return (
    <div>
        <img src={logo} alt=""
        style={{
            width:"20%",
            height:"20%"

        }}
        />
    </div>
  )
}

export default Logo