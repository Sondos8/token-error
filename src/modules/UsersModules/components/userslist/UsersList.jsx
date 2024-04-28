import React from 'react'
import Header from '../../../SharedModules/components/Header/Header'
import header from '../../../../assets/images/header.png'

export default function UsersList() {
  return (
    <>
    <Header 
      title={'Users List!'}
      description={'You can now add your items that any user can order it from the Application and you can edit'} 
      imgUrl={header} 
    /> 


    </>
  )
}
