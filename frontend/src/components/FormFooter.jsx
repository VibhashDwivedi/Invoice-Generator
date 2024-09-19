import React, { useState } from "react";
import "../css/FormFooter.modules.css";

const FormFooter = () => {
  const [formData, setFormData] = useState({
    notes: "Notes",
    notesDescription: "It was great doing business with you.",
    termsConditions: "Terms & Conditions",
    termsConditionsDescription: "Please make the payment by the due date."
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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
          value={formData.notes}
          placeholder="Notes"
          className="custom-input2 fs-6 fw-medium mb-1"
          onChange={handleChange}
          style={{ fontSize: '15px', color: 'GrayText' }}
        />
        <textarea
          name="notesDescription"
          value={formData.notesDescription}
          placeholder="Notes Description"
          className="custom-input2 fs-6 mb-4"
          onChange={handleChange}
          style={{ fontSize: '15px', color: 'GrayText' }}
        />
        <input
          type="text"
          name="termsConditions"
          value={formData.termsConditions}
          placeholder="Terms & Conditions"
          className="custom-input2 fs-6 fw-medium mb-1"
          onChange={handleChange}
          style={{ fontSize: '15px', color: 'GrayText' }}
        />
        <textarea
          name="termsConditionsDescription"
          value={formData.termsConditionsDescription}
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