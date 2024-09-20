import React, { forwardRef, useContext } from 'react'
import { InvoiceContext } from '../InvoiceContext'

const Print = forwardRef((props, ref) => {
    const { title, logo, formData1, formData, formData2 } = useContext(InvoiceContext);
  return (
    
    <div className="card" ref={ref}>
        <div className="card-body">
            <div className="d-flex justify-content-between">
            <div className="upload-logo-section">
                <img
                src={logo}
                alt="Company Logo"
                style={{
                    width: "40%",
                    height: "40%",
                    objectFit: "cover",
                    
                }}
                />
            </div>
            <div className="text-center">
                <h4>{title}</h4>
            </div>
            </div>
            <div className="row mt-3">
            <div className="col-md-6">
                <div className="mb-3">
                <h5>From:</h5>
                <p>{formData1.companyName}</p>
                <p>{formData1.yourName}</p>
                <p>{formData1.gstin}</p>
                <p>{formData1.address}</p>
                <p>{formData1.city}</p>
                <p>{formData1.state}</p>
                <p>{formData1.country}</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="mb-3">
                <h5>Bill To:</h5>
                <p>{formData.companyName}</p>
                <p>{formData.clientName}</p>
                <p>{formData.gstin}</p>
                <p>{formData.address}</p>
                <p>{formData.city}</p>
                <p>{formData.state}</p>
                <p>{formData.country}</p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6">
                <div className="mb-3">
                <h5>Invoice Details:</h5>
                <p>{formData2.invoice}</p>
                <p>{formData2.invoiceValue}</p>
                <p>{formData2.invoiceDate}</p>
                <p>{formData2.IDate}</p>
                <p>{formData2.dueDate}</p>
                <p>{formData2.DDate}</p>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}
)

export default Print