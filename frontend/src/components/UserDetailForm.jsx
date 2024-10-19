import React, { useContext, useState } from 'react';
import '../css/UserDetailForm.modules.css';
import { InvoiceContext } from '../InvoiceContext';


const UserDetailForm = () => {
 
  const { formData1, setFormData1   } = useContext(InvoiceContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const statesOfIndia = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  const countries = [
    'India', 'United States', 'Canada', 'Australia', 'United Kingdom', 'Germany', 'France', 'Japan', 'China', 'Brazil'
  ];

  return (
    <form action="">
      <input
        type="text"
        className="form-control responsive-input"
        name="companyName"
        placeholder="Your Company"
        value={formData1.companyName}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData1.companyName ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="yourName"
        placeholder="Your Name"
        value={formData1.yourName}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData1.yourName ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="gstin"
        placeholder="Company's GSTIN"
        value={formData1.gstin}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData1.gstin ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="address"
        placeholder="Company's address"
        value={formData1.address}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData1.address ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="city"
        placeholder="City"
        value={formData1.city}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData1.city ? 'black' : 'GrayText'
        }}
      />
      <select
        className="form-control responsive-input mt-1 py-0"
        name="state"
        value={formData1.state}
        onChange={handleInputChange}
        style={{
         
          border: 'none',
          color: formData1.state ? 'black' : 'GrayText',
        }}
      >
        <option value="" disabled>State</option>
        {statesOfIndia.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      <select
        className="form-control responsive-input mt-1 py-0"
        name="country"
        value={formData1.country}
        onChange={handleInputChange}
        style={{
         
          border: 'none',
          color: formData1.country ? 'black' : 'GrayText',
        }}
      >
        <option value="" disabled>Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </form>
  );
};

export default UserDetailForm;