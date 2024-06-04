import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

const PrivateRouter = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
  
    if (loading) {
      return <LoadingSpinner />
    }
    if (user) {
      return children;
    }
    return (
      <Navigate to={"/login"} state={{ from: location }} replace />
    )
  }

export default PrivateRouter
