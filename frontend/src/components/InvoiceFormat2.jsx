import React, { forwardRef, useContext, useEffect } from 'react';
import Logo from './Logo';
import UserDetail from './UserDetail';
import Title from './Title';
import InvoiceDetail from './InvoiceDetail';
import Place from './Place';
import '../css/format2.css'; // Adjust the path as necessary
import { InvoiceContext } from '../InvoiceContext';
import TableData from './Tabledata';
import Notes from './Notes';
import Summary from './Summary';

const InvoiceFormat2 = forwardRef((props, ref) => {
  const { formData } = useContext(InvoiceContext);
  const { theme } = props;

  useEffect(() => {
    applyThemeStyles(theme);
  }, [theme]);

  const applyThemeStyles = (theme) => {
    const tableHeaders = document.querySelectorAll('.table-header th');
    const tableBorders = document.querySelectorAll('.table-bordered, .table-bordered td');

    const styles = {
      black: { backgroundColor: '#000000', color: '#ffffff' },
      green: { backgroundColor: '#00ff00', color: '#ffffff' },
      blue: { backgroundColor: '#0000ff', color: '#ffffff' },
      pink: { backgroundColor: '#ff69b4', color: '#ffffff' },
      maroon: { backgroundColor: '#800000', color: '#ffffff' },
    };

    const themeStyles = styles[theme] || styles.black;

    tableHeaders.forEach((th) => {
      th.style.backgroundColor = themeStyles.backgroundColor;
      th.style.color = themeStyles.color;
    });

    tableBorders.forEach((element) => {
      element.style.borderColor = themeStyles.backgroundColor;
    });
  };

  return (
    <div className='card' style={{minHeight:'900px'}} ref={ref}>
      <div className="card-body">
        <table className="table-bordered full-width-table p-3">
          <tbody>
            <tr style={{ height: '110px' }} className='p-3'>
              <td colSpan="2">
                <div className='d-flex justify-content-between'>
                  <div>
                    <Logo />
                    <UserDetail />
                  </div>
                  <Title />
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <InvoiceDetail />
              </td>
              <td>
                <Place />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className='text-center'>{formData.clientName}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className=''>{formData.country}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <TableData />
              </td>
            </tr>
            <tr>
              <td>
                <Notes />
              </td>
              <td>
                <Summary />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default InvoiceFormat2;