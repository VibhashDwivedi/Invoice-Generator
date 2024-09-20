import React, { useContext } from "react";
import { InvoiceContext } from "../InvoiceContext";

const ClientDetail = () => {
  const { formData } = useContext(InvoiceContext);
  return (
    <div>
      <div>{formData.companyName}</div>
      <div>{formData.clientName}</div>
      
      <div>{formData.address}</div>
      <div>{formData.city}</div>
      <div>{formData.state}</div>
      <div>{formData.country}</div>
      <div>GSTIN {formData.gstin}</div>
    </div>
  );
};

export default ClientDetail;
