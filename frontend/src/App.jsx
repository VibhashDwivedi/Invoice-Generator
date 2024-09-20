import React from "react";
import Invoice from "./components/Invoice";
import { InvoiceProvider } from "./InvoiceContext";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";
import Download from "./components/Download";

function App() {
  return (
    <ThemeProvider>
      <InvoiceProvider>
        <div className="container">
          <div>
            <div className="row my-5">
              <div className="col-md-8">
                <Invoice />
              </div>
              <div className="col-md-4 ">
                <Download />
              </div>
            </div>
          </div>
        </div>
      </InvoiceProvider>
    </ThemeProvider>
  );
}

export default App;