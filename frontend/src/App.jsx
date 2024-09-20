import React, { useRef } from "react";
import Invoice from "./components/Invoice";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { InvoiceProvider } from "./InvoiceContext";
import Print from "./components/Print";
import InvoiceFormat1 from "./components/InvoiceFormat1";
import ThemeSelector from "./components/ThemeSelector";
function App() {
  const printRef = useRef();

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

  return (
    <InvoiceProvider>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Invoice />
          </div>
          <div className="col-md-4">
          <ThemeSelector />
         
          </div>
        </div>
        <div className="row">
          <div className="col-md-9" >
          <InvoiceFormat1  ref ={printRef}/>
          </div>
       
        </div>
       
        <button onClick={handleDownloadPdf} className="btn btn-primary mt-3">
          Download PDF
        </button>
      </div>
    </InvoiceProvider>
  );
}

export default App;
