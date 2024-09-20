import React, { useContext } from "react";
import { InvoiceContext } from "../InvoiceContext";

const UserDetail = () => {
  const { formData1 } = useContext(InvoiceContext);
  return (
    <>
      <div>{formData1.companyName}</div>
      <div> {formData1.yourName}</div>
    
      <div> {formData1.address}</div>
      <div> {formData1.city}</div>
      <div> {formData1.state}</div>
      <div>{formData1.country}</div>
      <div> GSTIN {formData1.gstin}</div>
    </>
  );
};

export default UserDetail;
