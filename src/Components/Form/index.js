import React from "react";

const Form = ({ name, submitHandler, className, children }) => (
  <form name={name} onSubmit={submitHandler} className={className}>
    {children}
  </form>
);

export default Form;
