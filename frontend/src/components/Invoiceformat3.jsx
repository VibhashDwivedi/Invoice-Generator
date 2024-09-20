import React, { forwardRef, useContext, useEffect } from "react";
import Logo from "./Logo";
import UserDetail from "./UserDetail";
import Title from "./Title";
import InvoiceDetail from "./InvoiceDetail";
import Place from "./Place";
import "../css/format2.css"; // Adjust the path as necessary
import { InvoiceContext } from "../InvoiceContext";
import TableData from "./Tabledata";
import Summary from "./Summary";
import ClientDetail from "./ClientDetail";

const InvoiceFormat3 = forwardRef((props, ref) => {
  const { formData4, formData2 } = useContext(InvoiceContext);
  const { theme } = props;

  useEffect(() => {
    applyThemeStyles(theme);
  }, [theme]);

  const applyThemeStyles = (theme) => {
    const tableHeaders = document.querySelectorAll(".table-header th");
    const tableBorders = document.querySelectorAll(
      ".table-bordered, .table-bordered td"
    );
    const lines = document.querySelectorAll(".line");

    const styles = {
      black: {
        backgroundColor: "#000000",
        color: "#ffffff",
        borderColor: "#000000",
      },
      green: {
        backgroundColor: "#00ff00",
        color: "#ffffff",
        borderColor: "#00ff00",
      },
      blue: {
        backgroundColor: "#0000ff",
        color: "#ffffff",
        borderColor: "#0000ff",
      },
      pink: {
        backgroundColor: "#ff69b4",
        color: "#ffffff",
        borderColor: "#ff69b4",
      },
      maroon: {
        backgroundColor: "#800000",
        color: "#ffffff",
        borderColor: "#800000",
      },
    };

    const themeStyles = styles[theme] || styles.black;

    tableHeaders.forEach((th) => {
      th.style.backgroundColor = themeStyles.backgroundColor;
      th.style.color = themeStyles.color;
    });

    tableBorders.forEach((element) => {
      element.style.borderColor = themeStyles.borderColor;
    });

    lines.forEach((line) => {
      line.style.borderColor = themeStyles.borderColor;
    });
  };
  return (
    <div className="card" style={{ minHeight: "900px" }} ref={ref}>
      <div className="card-body p-4">
        <div className="d-flex">
          <div>
            <Logo />
          </div>
          <div>
            <UserDetail />
          </div>
        </div>
        <div className="d-flex">
            <div className="line mt-3" style={{width:'380px', height:'0px'}}></div>
            <div ><Title /></div>
            <div className="line mt-3" style={{width:'200px', height:'0px'}}></div>
        </div>
        <div className="d-flex justify-content-between">
            <div><ClientDetail/></div>
            <div>
            <div className="d-flex">
                  <div>{formData2.invoice}:</div>
                  <div className="mx-5"> {formData2.invoiceValue}</div>
                 </div>
                <InvoiceDetail/>
                </div>
        </div>
        <div>
            <Place/>
           
        </div>
        <table className="table-bordered full-width-table p-3 mt-3">
        <TableData/>
            </table>
            <div className="d-flex justify-content-between mt-2">
           <div>{formData4.notesDescription}</div>
            <div><Summary/></div>
            </div>
            <div>
                <div className="text-black fw-semibold">{formData4.termsConditions}</div>
                <div>{formData4.termsConditionsDescription}</div>
            </div>
      </div>
    </div>
  );
});

export default InvoiceFormat3;
