import React, { forwardRef, useContext, useEffect } from "react";
import { InvoiceContext } from "../InvoiceContext";
import Title from "./Title";
import UserDetail from "./UserDetail";
import Logo from "./Logo";
import ClientDetail from "./ClientDetail";
import InvoiceDetail from "./InvoiceDetail";
import TableData from "./Tabledata";
import Summary from "./Summary";
import Notes from "./Notes";
import Place from "./Place";
import "../css/table.modules.css";

const InvoiceFormat1 = forwardRef((props, ref) => {
  const { formData2 } = useContext(InvoiceContext);
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
        color: "white",
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
    <div className="card " style={{ minHeight: "900px" }} ref={ref}>
      <div className="card-body">
        <div className="d-flex">
          <div style={{ flex: "2" }} className="mt-2">
            <Logo />
            <UserDetail />
          </div>
          <div>
            <Title />
            <div className="float-end fw-semibold text-muted">
              {formData2.invoice}
              {formData2.invoiceValue}
            </div>
          </div>
        </div>
        <div className="d-flex mt-5">
          <div style={{ flex: "3" }}>
            <ClientDetail />
          </div>
          <div style={{ flex: "2" }}>
            <InvoiceDetail />
          </div>
        </div>
        <div>
          <Place />
        </div>
        <TableData />
        <div className="line"></div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <Summary />
          </div>
        </div>
        <Notes />
      </div>
    </div>
  );
});

export default InvoiceFormat1;
