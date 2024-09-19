import React, { useState } from 'react';
import '../css/UserDetailForm.modules.css';

const UserDetailForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    yourName: '',
    gstin: '',
    address: '',
    city: '',
    state: '',
    country: 'India' // Set default value to 'India'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
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
        value={formData.companyName}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData.companyName ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="yourName"
        placeholder="Your Name"
        value={formData.yourName}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData.yourName ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="gstin"
        placeholder="Company's GSTIN"
        value={formData.gstin}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData.gstin ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="address"
        placeholder="Company's address"
        value={formData.address}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData.address ? 'black' : 'GrayText'
        }}
      />
      <input
        type="text"
        className="form-control responsive-input mt-1"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleInputChange}
        style={{
          height: '25px', // Updated height
          padding: '10px',
          fontSize: '16px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          border: 'none',
          textAlign: 'left',
          color: formData.city ? 'black' : 'GrayText'
        }}
      />
      <select
        className="form-control responsive-input mt-1 py-0"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        style={{
         
          border: 'none',
          color: formData.state ? 'black' : 'GrayText',
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
        value={formData.country}
        onChange={handleInputChange}
        style={{
         
          border: 'none',
          color: formData.country ? 'black' : 'GrayText',
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