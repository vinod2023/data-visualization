import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { connect } from 'react-redux';
import { UPDATE_DATA, UPDATE_PRODUCTS } from './types/types';

function Form(props) {

  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (props.data.length !== 0)
      setIsUploaded(true)
  }, [])

  const handleFile = (file) => {
    setFile(file);
  }

  const handleClick = async () => {
    if (file !== null) {
      setError("");
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
          //read workbook
          const wb = XLSX.read(bufferArray, { type: 'buffer' });
          //read first sheet
          const wname = wb.SheetNames[0];
          const ws = wb.Sheets[wname];
          //convert sheet data to json data
          const data = XLSX.utils.sheet_to_json(ws, { raw: false });
          resolve(data);
        };
        fileReader.onerror = (error) => {
          reject(error)
        }
      })

      await promise.then(d => {
        props.updateData(d);
        updateChartsData(d);
      })
      setIsUploaded(!isUploaded);
    }
    else {
      setError('Please choose the file');
    }
  }

  const updateChartsData = (d) => {
    if (d[0].Product_SUBCategory !== undefined) {
      const products = {};
      d.forEach((item, index, arr) => {
        if (products[item.Product_SUBCategory])
          products[item.Product_SUBCategory] += +arr[index].OrderQty;
        else
          products[item.Product_SUBCategory] = +item.OrderQty;
      });
      props.updateProducts(products);
    }
  }

  const handleClickReset = () => {
    props.updateData([]);
    props.updateProducts({});
    setFile(null);
    setError("");
    setIsUploaded(false);
  }

  return (
    <div className="form">
      { isUploaded ?
        <div>
          <h3>File uploaded Successfully</h3>
          <button className="upload" onClick={handleClickReset}>Reset</button>
        </div> :
        <div >
          <h3>Please upload the Excel file</h3>
          <input type="file" className="inputBox" accept=".xlsx, .xls, .csv" onChange={(event) => {
            const file = event.target.files[0]
            handleFile(file)
          }} /><br />
          <button className="upload" onClick={handleClick}>Upload</button>
        </div>
      }
      {error.length !== 0 &&
        <div className="error">
          Please choose the file
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (data) => dispatch({
      type: UPDATE_DATA,
      payload: data
    }),
    updateProducts: (data) => dispatch({
      type: UPDATE_PRODUCTS,
      payload: data
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
