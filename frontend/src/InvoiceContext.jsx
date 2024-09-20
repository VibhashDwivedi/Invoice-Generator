import React, { createContext, useState } from "react";
export const InvoiceContext = createContext();

export const InvoiceProvider = ({ children }) => {
  const [title, setTitle] = useState("TAX INVOICE");
  const [logo, setLogo] = useState(null);
  const [place, setPlace] = useState("");

  //user details
  const [formData1, setFormData1] = useState({
    companyName: "",
    yourName: "",
    gstin: "",
    address: "",
    city: "",
    state: "",
    country: "India", // Set default value to 'India'
  });

  //client details
  const [formData, setFormData] = useState({
    companyName: "",
    clientName: "Bill to: ",
    gstin: "",
    address: "",
    city: "",
    state: "",
    country: "India", // Set default value to 'India'
  });

  const [formData2, setFormData2] = useState({
    invoice: "Invoice#",
    invoiceValue: "",
    invoiceDate: "Invoice Date",
    IDate: "",
    dueDate: "Due Date",
    DDate: "",
  });

  const [headerData, setHeaderData] = useState({
    itemDescLabel: "Item Description",
    qtyLabel: "Qty",
    rateLabel: "Rate",
    sgstLabel: "SGST",
    cgstLabel: "CGST",
    cessLabel: "Cess",
    amountLabel: "Amount",
    subTotalLabel: "Sub-Total",
  });

  const [rows, setRows] = useState([
    {
      itemDesc: "Broucher Design",
      additionalInfo: "",
      qty: "2",
      rate: "100",
      sgst: "6",
      cgst: "6",
      cess: "0",
      calculatedSgst: "12.00",
      calculatedCgst: "12.00",
      calculatedCess: "0.00",
      amount: "200.00",
    },
    {
      itemDesc: "",
      additionalInfo: "",
      qty: "1",
      rate: "0",
      sgst: "0",
      cgst: "0",
      cess: "0",
      calculatedSgst: "0.00",
      calculatedCgst: "0.00",
      calculatedCess: "0.00",
      amount: "0.00",
    },
    {
      itemDesc: "",
      additionalInfo: "",
      qty: "1",
      rate: "0",
      sgst: "0",
      cgst: "0",
      cess: "0",
      calculatedSgst: "0.00",
      calculatedCgst: "0.00",
      calculatedCess: "0.00",
      amount: "0.00",
    },
  ]);

  const [formData4, setFormData4] = useState({
    notes: "Notes",
    notesDescription: "It was great doing business with you.",
    termsConditions: "Terms & Conditions",
    termsConditionsDescription: "Please make the payment by the due date."
  });

  return (
    <InvoiceContext.Provider
      value={{
        title,
        setTitle,
        logo,
        setLogo,
        formData1,
        setFormData1,
        formData,
        formData2,
        setFormData,
        setFormData2,
        headerData,
        setHeaderData,
        rows,
        setRows,
        formData4,
        setFormData4,
        place,
        setPlace
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};
