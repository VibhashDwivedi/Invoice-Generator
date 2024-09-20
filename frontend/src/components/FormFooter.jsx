import React, { useContext, useState } from "react";
import "../css/FormFooter.modules.css";
import { InvoiceContext } from '../InvoiceContext';

const FormFooter = () => {
  
  const { formData4, setFormData4 } = useContext(InvoiceContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData4((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="form-footer p-3">
      <div className="d-flex flex-column mt-2">
        <input
          type="text"
          name="notes"
          value={formData4.notes}
          placeholder="Notes"
          className="custom-input2 fs-6 fw-medium mb-1"
          onChange={handleChange}
          style={{ fontSize: '15px', color: 'GrayText' }}
        />
        <textarea
          name="notesDescription"
          value={formData4.notesDescription}
          placeholder="Notes Description"
          className="custom-input2 fs-6 mb-4"
          onChange={handleChange}
          style={{ fontSize: '15px', color: 'GrayText' }}
        />
        <input
          type="text"
          name="termsConditions"
          value={formData4.termsConditions}
          placeholder="Terms & Conditions"
          className="custom-input2 fs-6 fw-medium mb-1"
          onChange={handleChange}
          style={{ fontSize: '15px', color: 'GrayText' }}
        />
        <textarea
          name="termsConditionsDescription"
          value={formData4.termsConditionsDescription}
          placeholder="Terms & Conditions Description"
          className="custom-input2 fs-6 mb-2"
          onChange={handleChange}
          style={{ fontSize: '15px', color: 'GrayText' }}
        />
      </div>
    </div>
  );
};

export default FormFooter;