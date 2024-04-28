import React, { useEffect, useState } from 'react'
import Header from '../../../SharedModules/components/Header/Header'
import header from '../../../../assets/images/header.png'
import axios from 'axios'

export default function CategoriesList() {

  const [categoriesList, setCategoriesList] = useState([])

  const getCategoriesList = async () => {
    try {
      let response = await axios.get('https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1',
      {
        headers: { Authorization: `Bearer ${ localStorage.getItem("token")}` }
      }
    );
    console.log(response);
    }
    catch(error) {
      console.log(error);
    }
  } 

  useEffect(() => {
    getCategoriesList();
  }, [])

  return (
    <>
    <Header 
      title={'Categories Item'}
      description={'You can now add your items that any user can order it from the Application and you can edit'} 
      imgUrl={header} 
    /> 

    <div className="m-4 p-1">
      <div className="row">
        <div className="col-md-6">
          <h3>Categories Table Details</h3>
          <span className='color-3'>You can check all details</span>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button className='btn-c border-0 rounded-3'>Add New Category</button>
        </div>
      </div>
      <div className='background mt-2 p-3'>
          <div className='d-flex justify-content-between'>
            <span><strong>Name</strong></span>
            <span><strong>Actions</strong></span>
          </div>
      </div>
      <table className="table color-3 table-striped">
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </>
  )
}
