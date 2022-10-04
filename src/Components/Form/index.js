import React from "react";

const Form = ({ name, className, children }) => (
  <form name={name} className={className}>
    {children}
  </form>
);

export default Form;
