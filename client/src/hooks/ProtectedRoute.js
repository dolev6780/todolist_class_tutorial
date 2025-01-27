import React from "react";
import { Navigate } from "react-router-dom";
import { useUserRole } from "../hooks/useUserRole";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element, adminOnly }) => {
  const { isAdmin, isAuthenticated, loading } = useUserRole();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to="/" />;
  }

  return element;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  adminOnly: PropTypes.bool,
};

export default ProtectedRoute;
