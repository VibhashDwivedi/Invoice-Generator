import React, { useContext } from "react";
import "../css/table.modules.css"; // Import the CSS file
import { InvoiceContext } from "../InvoiceContext";
import Summary from "./Summary"; // Import the Summary component

const TableData = () => {
  const { headerData, rows } = useContext(InvoiceContext);

  // Filter rows where amount is greater than zero
  const filteredRows = rows.filter(row => parseFloat(row.amount) > 0);

  return (
    <div>
      <table width="100%" className="column" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr className="table-header">
            <th width="5%">#</th>
            <th width="20%">{headerData.itemDescLabel}</th>
            <th width="10%">HSN/SAC</th>
            <th width="10%">{headerData.qtyLabel}</th>
            <th width="10%">{headerData.rateLabel}</th>
            <th width="10%">{headerData.sgstLabel}</th>
            <th width="10%">{headerData.cgstLabel}</th>
            <th width="10%">{headerData.cessLabel}</th>
            <th width="15%">{headerData.amountLabel}</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="table-row">
                <td className="text-center">{index + 1}</td>
                <td>{row.itemDesc}</td>
                <td className="text-right">{row.hsnSac}</td>
                <td className="text-right">{row.qty}</td>
                <td className="text-right">{row.rate}</td>
                <td className="text-right">{row.calculatedSgst}</td>
                <td className="text-right">{row.calculatedCgst}</td>
                <td className="text-right">{row.calculatedCess}</td>
                <td className="text-right">{row.amount}</td>
              </tr>
              
            </React.Fragment>
          ))}
          <tr>
                <td colSpan="9">
                  <hr className="line" />
                </td>
              </tr>
        </tbody>
      </table>

     
    </div>
  );
};

export default TableData;