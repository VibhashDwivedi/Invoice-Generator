import React, { useState, useContext, useRef } from 'react';
import InvoiceFormat1 from './InvoiceFormat1';
import InvoiceFormat2 from './InvoiceFormat2';
import { ThemeContext } from '../ThemeContext';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import ReactToPrint from 'react-to-print';
import InvoiceFormat3 from './Invoiceformat3';

const FormatSelector = () => {
  const { theme } = useContext(ThemeContext);
  const [selectedFormat, setSelectedFormat] = useState('format1');
  const printRef = useRef();

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleDownloadPdf = () => {
    toPng(printRef.current)
      .then((dataUrl) => {
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297); // A4 size in mm
        pdf.save("invoice.pdf");
      })
      .catch((err) => {
        console.error("Failed to generate PDF", err);
      });
  };

  const themeStyles = {
    black: { backgroundColor: '#000000', color: '#ffffff' },
    green: { backgroundColor: '#00ff00', color: '#ffffff' },
    blue: { backgroundColor: '#0000ff', color: '#ffffff' },
    pink: { backgroundColor: '#ff69b4', color: '#ffffff' },
    maroon: { backgroundColor: '#800000', color: '#ffffff' },
  };

  const currentThemeStyle = themeStyles[theme] || themeStyles.black;

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: currentThemeStyle.color }}>
          <input
            type="radio"
            value="format1"
            checked={selectedFormat === 'format1'}
            onChange={handleFormatChange}
            style={{ accentColor: currentThemeStyle.backgroundColor }}
          />
         <span className='text-black mx-1'>Standard</span>
        </label>
        <label style={{ marginLeft: '20px', color: currentThemeStyle.color }}>
          <input
            type="radio"
            value="format2"
            checked={selectedFormat === 'format2'}
            onChange={handleFormatChange}
            style={{ accentColor: currentThemeStyle.backgroundColor }}
          />
          <span className='text-black mx-1'>Spreadsheet</span>
        </label>
        <label style={{ marginLeft: '20px', color: currentThemeStyle.color }}>
          <input
            type="radio"
            value="format3"
            checked={selectedFormat === 'format3'}
            onChange={handleFormatChange}
            style={{ accentColor: currentThemeStyle.backgroundColor }}
          />
         <span className='text-black mx-1'>Compact</span>
        </label>
      </div>
      <div style={{ position: 'absolute', top: '-99999px', minWidth: '750px' }}>
        {selectedFormat === 'format1' && <InvoiceFormat1 ref={printRef} theme={theme} />}
        {selectedFormat === 'format2' && <InvoiceFormat2 ref={printRef} theme={theme} />}
        {selectedFormat === 'format3' && <InvoiceFormat3 ref={printRef} theme={theme} />}
      </div>

      <hr />
      <div className="d-flex mx-2 justify-content-around">
        <button className='btn btn-primary mt-3'>
          Save Online
        </button>
        <div className="dropdown">
          <button className="btn btn-outline-dark mt-3 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
            Download/Print
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <ReactToPrint
                trigger={() => <button className="dropdown-item">Print</button>}
                content={() => printRef.current}
              />
            </li>
            <li>
              <button className="dropdown-item" onClick={handleDownloadPdf}>
                Download PDF
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FormatSelector;