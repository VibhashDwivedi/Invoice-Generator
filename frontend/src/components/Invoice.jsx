import React, { forwardRef, useContext } from "react";
import "../css/invoice.modules.css";
import '../css/UserDetailForm.modules.css';
import UserDetailForm from "./UserDetailForm";
import ClientDetailForm from "./ClientDetailForm";
import Table from "./Table";
import FormFooter from "./FormFooter";
import { InvoiceContext } from "../InvoiceContext";

const Invoice = forwardRef((props, ref) => {
  const { title, setTitle, logo, setLogo, place, setPlace } = useContext(InvoiceContext);
  // State for Place

  

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoDelete = () => {
    setLogo(null);
  };

  const statesOfIndia = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  return (
    <div className="card" ref={ref}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="upload-logo-section">
            <label className="add-logo">
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/bmp"
                className="form-control"
                autoFocus
                id="org_logo"
                title="Company Logo"
                data-is-array="false"
                style={{ display: "none" }}
                onChange={handleLogoChange}
              />
              <span className="add-logo-label">
                {logo ? (
                  <img
                    src={logo}
                    alt="Company Logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      maxHeight: "150px !important",
                    }}
                  />
                ) : (
                  <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <i className="fa fa-upload fa-2x" aria-hidden="true"></i>
                    <div>Add Logo</div>
                  </div>
                )}
              </span>
            </label>
          </div>
          {logo ? (
              <div className="d-flex flex-column mt-3 ">
              <div className=" me-2" onClick={() => document.getElementById('org_logo').click()}><i className="fa-solid fa-pen" style={{color:'blue'}}></i></div>
              <div className="" onClick={handleLogoDelete}><i className="fa-solid fa-trash" style={{color:'red'}}></i></div>
            </div>
          ) : (
            <div className="mx-4 fs-6 mt-2">
              <span className="fw-semibold">Upload Logo</span>
              <div style={{ fontSize: "15px" }}>
                240 x 240 pixels @ 72 DPI,
                <br />
                Maximum size of 1MB.
              </div>
            </div>
          )}
          <div className="inv-header-container flex-grow-1 ms-auto">
            <input
              className="form-control text-right no-outline"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              tabIndex="5"
              name="title"
              style={{
                minWidth: "150px", // Set a minimum width
                width: "100%", // Allow the input to take full width of its container
                height: "70px",
                padding: "10px",
                fontSize: "50px",
                lineHeight: "50px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                border: "none",
                textAlign: "right",
              }}
            />
          </div>
        </div>
        <div>
          <UserDetailForm />
          <div className="mt-4 mb-5">
            <ClientDetailForm />
          </div>

          <div className="mb-4 mx-3 d-flex">
            <label htmlFor="place" className="form-label pt-2 ">
              Place of Supply 
            </label>
            <select
        className="form-control responsive-input py-0"
        name="state"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        style={{
         
          border: 'none',
          color: place? 'black' : 'GrayText',
        }}
      >
        <option value="" disabled>State</option>
        {statesOfIndia.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
          </div>

          <Table />
          <div className="mt-5">
            <FormFooter />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Invoice;