import React, { useState } from 'react';
import '../css/invoice.modules.css';
import UserDetailForm from './UserDetailForm';
import ClientDetailForm from './ClientDetailForm';

const Invoice = () => {
  const [title, setTitle] = useState('TAX INVOICE');
  const [logo, setLogo] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    yourName: '',
    gstin: '',
    address: '',
    city: '',
    state: ''
  });

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

  return (
    <div>
      <div className="card ">
        <div className="card-body">
          <div className="d-flex justify-content-between ">

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
                  style={{ display: 'none' }}
                  onChange={handleLogoChange}
                />
                <span className="add-logo-label">
                  {logo ? (
                    <img src={logo} alt="Company Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', maxHeight: '150px !important' }} />
                  ) : (
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%', width: '100%' }}>
                      <i className="fa fa-upload fa-2x" aria-hidden="true"></i>
                      <div>Add Logo</div>
                    </div>
                  )}
                </span>
              </label>
            </div>

            {logo ? (
              <div className="mx-4 fs-6 mt-2">
                <button className="btn btn-primary me-2" onClick={() => document.getElementById('org_logo').click()}>Edit</button>
                <button className="btn btn-danger" onClick={handleLogoDelete}>Delete</button>
              </div>
            ) : (
              <div className="mx-4 fs-6 mt-2">
                <span className='fw-semibold'>Upload Logo</span>
                <div style={{ fontSize: '15px' }}>
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
                name='title'
                style={{
                  minWidth: '150px', // Set a minimum width
                  width: '100%', // Allow the input to take full width of its container
                  height: '70px',
                  padding: '10px',
                  fontSize: '50px',
                  lineHeight: '50px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  border: 'none',
                  textAlign: 'right',
                }}
              />
            </div>
          </div>

          <div>
           <UserDetailForm />
           <ClientDetailForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;