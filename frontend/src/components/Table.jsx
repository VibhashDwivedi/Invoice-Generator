import React, { useState } from "react";
import "../css/table.modules.css"; // Import the CSS file

const Table = () => {
  const [headerData, setHeaderData] = useState({
    itemDescLabel: "Item Description",
    qtyLabel: "Qty",
    rateLabel: "Rate",
    sgstLabel: "SGST",
    cgstLabel: "CGST",
    cessLabel: "Cess",
    amountLabel: "Amount",
    subTotalLabel: "Sub-Total",
  });

  const [rows, setRows] = useState([
    {
      itemDesc: "Broucher Design",
      additionalInfo: "",
      qty: "2",
      rate: "100",
      sgst: "6",
      cgst: "6",
      cess: "0",
      calculatedSgst: "12.00",
      calculatedCgst: "12.00",
      calculatedCess: "0.00",
      amount: "200.00",
    },
    {
      itemDesc: "",
      additionalInfo: "",
      qty: "1",
      rate: "0",
      sgst: "0",
      cgst: "0",
      cess: "0",
      calculatedSgst: "0.00",
      calculatedCgst: "0.00",
      calculatedCess: "0.00",
      amount: "0.00",
    },
    {
      itemDesc: "",
      additionalInfo: "",
      qty: "1",
      rate: "0",
      sgst: "0",
      cgst: "0",
      cess: "0",
      calculatedSgst: "0.00",
      calculatedCgst: "0.00",
      calculatedCess: "0.00",
      amount: "0.00",
    },
  ]);

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeaderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRowChange = (index, e) => {
    const { name, value } = e.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);
    calculateAmount(index); // Ensure amount is calculated on change
  };

  const calculateAmount = (index) => {
    const { qty, rate, sgst, cgst, cess } = rows[index];
    const totalAmount = parseFloat(qty) * parseFloat(rate);
    const calculatedSgst = ((totalAmount * parseFloat(sgst)) / 100).toFixed(2);
    const calculatedCgst = ((totalAmount * parseFloat(cgst)) / 100).toFixed(2);
    const calculatedCess = ((totalAmount * parseFloat(cess)) / 100).toFixed(2);
    const newRows = [...rows];
    newRows[index].amount = totalAmount.toFixed(2);
    newRows[index].calculatedSgst = calculatedSgst;
    newRows[index].calculatedCgst = calculatedCgst;
    newRows[index].calculatedCess = calculatedCess;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      {
        itemDesc: "",
        additionalInfo: "",
        qty: "1",
        rate: "0",
        sgst: "0",
        cgst: "0",
        cess: "0",
        calculatedSgst: "0.00",
        calculatedCgst: "0.00",
        calculatedCess: "0.00",
        amount: "0.00",
      },
    ]);
  };

  const deleteRow = (index) => {
    const newRows = rows.filter((_, i) => i !== index);
    setRows(newRows);
  };

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
    <div>
      <table width="100%" className="column" style={{ tableLayout: "fixed" }}>
        <thead>
          <tr className="table-header">
            <td width="30%" className="bg-black p-2">
              <input
                type="text"
                id="itemDescLabel"
                value={headerData.itemDescLabel}
                className="custom-input font-sm fw-medium"
                name="itemDescLabel"
                style={{ fontSize: "14px" }}
                onChange={handleHeaderChange}
              />
            </td>
            <td width="10%" className="bg-black p-2">
              <input
                type="text"
                id="qtyLabel"
                value={headerData.qtyLabel}
                className="custom-input fw-medium text-right"
                name="qtyLabel"
                style={{ fontSize: "14px" }}
                onChange={handleHeaderChange}
              />
            </td>
            <td width="10%" className="bg-black p-2">
              <input
                type="text"
                id="rateLabel"
                value={headerData.rateLabel}
                className="custom-input fw-medium text-right"
                name="rateLabel"
                style={{ fontSize: "14px" }}
                onChange={handleHeaderChange}
              />
            </td>
            <td
              width="10%"
              className="bg-black p-2 fw-medium text-white"
              style={{ fontSize: "14px" }}
            >
              <input
                type="text"
                id="sgstLabel"
                value={headerData.sgstLabel}
                className="custom-input fw-medium text-white"
                name="sgstLabel"
                style={{ fontSize: "14px" }}
                onChange={handleHeaderChange}
              />
            </td>
            <td
              width="10%"
              className="bg-black p-2 fw-medium text-white"
              style={{ fontSize: "14px" }}
            >
              <input
                type="text"
                id="cgstLabel"
                value={headerData.cgstLabel}
                className="custom-input fw-medium text-white"
                name="cgstLabel"
                style={{ fontSize: "14px" }}
                onChange={handleHeaderChange}
              />
            </td>
            <td
              width="10%"
              className="bg-black p-2 fw-medium text-white"
              style={{ fontSize: "14px" }}
            >
              <input
                type="text"
                id="cessLabel"
                value={headerData.cessLabel}
                className="custom-input fw-medium text-white"
                name="cessLabel"
                style={{ fontSize: "14px" }}
                onChange={handleHeaderChange}
              />
            </td>
            <td width="15%" className="bg-black p-2">
              <input
                type="text"
                id="amountLabel"
                value={headerData.amountLabel}
                className="custom-input font-sm fw-medium text-right"
                name="amountLabel"
                style={{ fontSize: "14px" }}
                onChange={handleHeaderChange}
              />
            </td>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <>
              <tr key={index} className="table-row">
                <td>
                  <textarea
                    rows={2}
                    columns={5}
                    type="text"
                    id="itemDesc"
                    className="custom-input2  mt-0"
                    name="itemDesc"
                    placeholder="Enter item Name/Description"
                    value={row.itemDesc}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                  <input
                    type="text"
                    id="additionalInfo"
                    className="custom-input2 mt-1 "
                    name="additionalInfo"
                    placeholder="HSN/SAC"
                    value={row.additionalInfo}
                    onChange={(e) => handleRowChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    id="qty"
                    className="custom-input2 text-right mt-0 text-center"
                    name="qty"
                    value={row.qty}
                    onChange={(e) => handleRowChange(index, e)}
                    onBlur={() => calculateAmount(index)}
                  />
                  <div className="blank-space"></div>
                </td>
                <td>
                  <input
                    type="text"
                    id="rate"
                    className="custom-input2 text-right mt-0 text-center"
                    name="rate"
                    value={row.rate}
                    onChange={(e) => handleRowChange(index, e)}
                    onBlur={() => calculateAmount(index)}
                  />
                  <div className="blank-space"></div>
                </td>
                <td>
                  <input
                    type="number"
                    id="sgst"
                    className="custom-input2 text-right mt-0 text-center"
                    name="sgst"
                    value={row.sgst}
                    onChange={(e) => handleRowChange(index, e)}
                    onBlur={() => calculateAmount(index)}
                  />
                  <div className="calculated-value mx-2 mb-3 text-muted">
                    {row.calculatedSgst}
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    id="cgst"
                    className="custom-input2 text-right mt-0 text-center"
                    name="cgst"
                    value={row.cgst}
                    onChange={(e) => handleRowChange(index, e)}
                    onBlur={() => calculateAmount(index)}
                  />
                  <div className="calculated-value mx-2 mb-3 text-muted">
                    {row.calculatedCgst}
                  </div>
                </td>
                <td>
                  <input
                    type="number"
                    id="cess"
                    className="custom-input2 text-right mt-0 text-center"
                    name="cess"
                    value={row.cess}
                    onChange={(e) => handleRowChange(index, e)}
                    onBlur={() => calculateAmount(index)}
                  />
                  <div className="calculated-value mx-2 mb-3 text-muted">
                    {row.calculatedCess}
                  </div>
                </td>
                <td className="text-right mt-0 text-center">
                  {row.amount}
                  <div className="blank-space"></div>
                </td>
                <td className="mt-0">
                  <div
                    className="delete-button "
                    style={{ color: "red" }}
                    onClick={() => deleteRow(index)}
                  >
                    <i className="fa-regular fa-circle-xmark"></i>
                  </div>
                  <div className="blank-space"></div>
                </td>
              </tr>
              <tr>
                <td colSpan="7">
                  <hr />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <div className="d-flex px-3">
        <div
          className=""
          onClick={addRow}
          style={{ color: "Highlight", flex: "2" }}
        >
          <i className="fa-solid fa-circle-plus"></i>
          <span className="mx-1"> Add Line item</span>
        </div>

        <div className="summary px-5" style={{ flex: "3" }}>
          <div className="d-flex justify-content-between  px-2">
            <input
              type="text"
              value={headerData.subTotalLabel || "Sub-Total"}
              className="custom-input2 fs-6 "
              name="subTotalLabel"
              style={{ fontSize: "15px" }}
              onChange={handleHeaderChange}
            />
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
          <div className="d-flex justify-content-between  px-2">
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
            <input
              type="text"
              value={headerData.totalLabel || "TOTAL"}
              className="custom-input2 fs-6 bg-light mt-2 "
              name="totalLabel"
              style={{ fontSize: "15px" }}
              onChange={handleHeaderChange}
            />
            <div className="mt-2">{calculateGrandTotal()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
