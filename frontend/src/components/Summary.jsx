import React, { useContext } from "react";
import { InvoiceContext } from "../InvoiceContext";

const Summary = () => {
  const { headerData, rows } = useContext(InvoiceContext);

  const calculateSubTotal = () => {
    return rows
      .reduce((total, row) => total + parseFloat(row.amount || 0), 0)
      .toFixed(2);
  };

  const calculateSGST = () => {
    const sgstMap = {};
    rows.forEach((row) => {
      if (row.sgst) {
        if (!sgstMap[row.sgst]) {
          sgstMap[row.sgst] = 0;
        }
        sgstMap[row.sgst] += parseFloat(row.calculatedSgst || 0);
      }
    });
    return Object.keys(sgstMap).map((key) => ({
      percentage: key,
      value: sgstMap[key].toFixed(2),
    }));
  };

  const calculateCGST = () => {
    const cgstMap = {};
    rows.forEach((row) => {
      if (row.cgst) {
        if (!cgstMap[row.cgst]) {
          cgstMap[row.cgst] = 0;
        }
        cgstMap[row.cgst] += parseFloat(row.calculatedCgst || 0);
      }
    });
    return Object.keys(cgstMap).map((key) => ({
      percentage: key,
      value: cgstMap[key].toFixed(2),
    }));
  };

  const calculateGrandTotal = () => {
    const subTotal = parseFloat(calculateSubTotal());
    const totalSgst = calculateSGST().reduce(
      (total, sgst) => total + parseFloat(sgst.value),
      0
    );
    const totalCgst = calculateCGST().reduce(
      (total, cgst) => total + parseFloat(cgst.value),
      0
    );
    return (subTotal + totalSgst + totalCgst).toFixed(2);
  };

  return (
    <div className="summary px-5">
      <div className="d-flex justify-content-between px-2">
        <div>{headerData.subTotalLabel || "Sub-Total"}:</div>
        <div>{calculateSubTotal()}</div>
      </div>
      <div className="d-flex justify-content-between px-2">
        <div>
          {calculateSGST().map(
            (sgst, index) =>
              sgst.value > 0 && (
                <div className="mt-2" key={index}>
                  SGST ({sgst.percentage}%):
                </div>
              )
          )}
        </div>
        <div>
          {calculateSGST().map(
            (sgst, index) =>
              sgst.value > 0 && (
                <div className="mt-2" key={index}>
                  {sgst.value}
                </div>
              )
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between px-2">
        <div>
          {calculateCGST().map(
            (cgst, index) =>
              cgst.value > 0 && (
                <div className="mt-2" key={index}>
                  CGST ({cgst.percentage}%):
                </div>
              )
          )}
        </div>
        <div>
          {calculateCGST().map(
            (cgst, index) =>
              cgst.value > 0 && (
                <div className="mt-2" key={index}>
                  {cgst.value}
                </div>
              )
          )}
        </div>
      </div>
      <div className="d-flex justify-content-between bg-light px-2 py-1 pt-0">
        <div>{headerData.totalLabel || "TOTAL"}:</div>
        <div>{calculateGrandTotal()}</div>
      </div>
    </div>
  );
};

export default Summary;