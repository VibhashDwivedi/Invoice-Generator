import React from "react";
import UserDetailForm from "./UserDetailForm";
import ClientDetailForm from "./ClientDetailForm";
import Table from "./Table";
import FormFooter from "./FormFooter";
import "../css/invoice.modules.css";

const Invoice = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>Invoice</h1>
      </div>
      <div className="invoice-body">
        <div className="mb-2">
          <UserDetailForm />
          <div className="mt-5">
            <ClientDetailForm />
          </div>
        </div>
        <div className="d-flex p-2 align-items-center">
          <button onClick={handlePrint} className="btn btn-primary">
            Print Invoice
          </button>
        </div>
        <div className="p-2">
          <Table />
        </div>
        <FormFooter />
      </div>
    </div>
  );
};

export default Invoice;