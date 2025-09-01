import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p role="alert" className="text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

const getChildId = (children) => {
  const childId = React.Children.only(children);

  if ("id" in childId.props) {
    return childId.props.id;
  }
};

export default Field;
