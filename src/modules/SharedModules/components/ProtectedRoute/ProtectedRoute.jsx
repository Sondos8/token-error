import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ loginDate , children  }) {

    if(localStorage.getItem('token') || loginDate) return children;

  return <Navigate to="/login" />
}
