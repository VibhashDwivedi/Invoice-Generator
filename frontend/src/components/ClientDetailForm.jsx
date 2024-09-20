import React, { useContext } from "react";
import "../css/ClientDetailForm.modules.css";
import { InvoiceContext } from "../InvoiceContext";

const ClientDetailForm = () => {
  const { formData, setFormData, formData2, setFormData2 } =
    useContext(InvoiceContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setFormData2((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, "0");
    return `${dd}-${mm}-${yyyy}`;
  };

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const countries = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
  ];

  return (
    <div className="row">
      <div className="col-md-6">
        <form action="">
          <input
            type="text"
            className="form-control responsive-input2"
            name="clientName"
            placeholder="Bill to : "
            value={formData.clientName}
            onChange={handleInputChange}
            style={{
              height: "25px", // Updated height
              padding: "10px",
              fontSize: "16px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "none",
              textAlign: "left",
              color: "black",
              fontWeight: "bold",
            }}
          />
          <input
            type="text"
            className="form-control responsive-input2 mt-1"
            name="companyName"
            placeholder="Your Client's Company"
            value={formData.companyName}
            onChange={handleInputChange}
            style={{
              height: "25px", // Updated height
              padding: "10px",
              fontSize: "16px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "none",
              textAlign: "left",
              color: formData.yourName ? "black" : "GrayText",
            }}
          />
          <input
            type="text"
            className="form-control responsive-input2 mt-1"
            name="gstin"
            placeholder="Client's GSTIN"
            value={formData.gstin}
            onChange={handleInputChange}
            style={{
              height: "25px", // Updated height
              padding: "10px",
              fontSize: "16px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "none",
              textAlign: "left",
              color: formData.gstin ? "black" : "GrayText",
            }}
          />
          <input
            type="text"
            className="form-control responsive-input2 mt-1"
            name="address"
            placeholder="Client's address"
            value={formData.address}
            onChange={handleInputChange}
            style={{
              height: "25px", // Updated height
              padding: "10px",
              fontSize: "16px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "none",
              textAlign: "left",
              color: formData.address ? "black" : "GrayText",
            }}
          />
          <input
            type="text"
            className="form-control responsive-input2 mt-1"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            style={{
              height: "25px", // Updated height
              padding: "10px",
              fontSize: "16px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              border: "none",
              textAlign: "left",
              color: formData.city ? "black" : "GrayText",
            }}
          />
          <select
            className="form-control responsive-input2 mt-1 py-0"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            style={{
              border: "none",
              color: formData.state ? "black" : "GrayText",
            }}
          >
            <option value="" disabled>
              State
            </option>
            {statesOfIndia.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <select
            className="form-control responsive-input2 mt-1 py-0"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            style={{
              border: "none",
              color: formData.country ? "black" : "GrayText",
            }}
          >
            <option value="" disabled>
              Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="col-md-6">
        <form action="">
          <div className="d-flex flex-wrap">
            <input
              type="text"
              className="form-control responsive-input"
              name="invoice"
              placeholder="Invoice#"
              value={formData2.invoice}
              onChange={handleInputChange2}
              style={{
                height: "25px", // Updated height
                padding: "10px",
                fontSize: "16px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "none",
                textAlign: "left",
                color: "GrayText",
                fontWeight: "bold",
                flex: "1",
              }}
            />
            <input
              type="text"
              className="form-control responsive-input mx-1"
              name="invoiceValue"
              placeholder="INV-12"
              value={formData2.invoiceValue}
              onChange={handleInputChange2}
              style={{
                height: "25px", // Updated height
                padding: "10px",
                fontSize: "16px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "none",
                textAlign: "left",
                color: formData.invoiceValue ? "black" : "GrayText",
                flex: "2",
              }}
            />
          </div>
          <div className="d-flex flex-wrap mt-2">
            <input
              type="invoiceDate"
              className="form-control responsive-input"
              name="invoiceDate"
              placeholder="Invoice Date"
              value={formData2.invoiceDate}
              onChange={handleInputChange2}
              style={{
                height: "25px", // Updated height
                padding: "10px",
                fontSize: "16px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "none",
                textAlign: "left",
                color: "GrayText",
                fontWeight: "bold",
                flex: "1",
              }}
            />
            <input
              type="date"
              className="form-control responsive-input mx-1"
              name="IDate"
              placeholder=""
              value={formData.IDate}
              onChange={handleInputChange2}
              style={{
                height: "25px", // Updated height
                padding: "10px",
                fontSize: "16px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "none",
                textAlign: "left",
                color: formData.invoiceValue ? "black" : "GrayText",
                flex: "2",
              }}
            />
          </div>
          <div className="d-flex flex-wrap mt-2">
            <input
              type="dueDate"
              className="form-control responsive-input"
              name="dueDate"
              placeholder="Due Date"
              value={formData2.dueDate}
              onChange={handleInputChange2}
              style={{
                height: "25px", // Updated height
                padding: "10px",
                fontSize: "16px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "none",
                textAlign: "left",
                color: "GrayText",
                fontWeight: "bold",
                flex: "1",
              }}
            />
            <input
              type="date"
              className="form-control responsive-input mx-1"
              name="DDate"
              placeholder={getCurrentDate()}
              value={formData.DDate}
              onChange={handleInputChange2}
              style={{
                height: "25px", // Updated height
                padding: "10px",
                fontSize: "16px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "none",
                textAlign: "left",
                color: formData.invoiceValue ? "black" : "GrayText",
                flex: "2",
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientDetailForm;
