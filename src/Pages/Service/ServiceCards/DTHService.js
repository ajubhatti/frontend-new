import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../../../Components/Form";
import { DTHOperator } from "../Operators/DTHOperator";

const DTHService = (props) => {
  const [apiCall, setApiCall] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    operator: "",
    tel: "",
    amount: "",
  });

  useEffect(() => {
    fetchPlan();
  }, []);

  const handlerChange = (event) => {
    const { name, value } = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log("value", value);
    fetchPlan(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setApiCall(true);
    setSubmitted(true);
    if (values.tel !== "" && values.amount !== "") {
      try {
        // await props.api Name(values).then((res) => {
        //   // Logic
        // });
      } finally {
        setApiCall(false);
      }
    }
  };

  const fetchPlan = async (value) => {
    // https://www.mplan.in/api/plans.php?apikey=[yourapikey]&offer=roffer&tel=[mobile]&operator=[operator](BSNL,Idea,given below)
    let url = `https://www.mplan.in/api/dthplans.php?apikey=ff7c4e87910a29fc6fa601dd4a8469b6&operator=${value}`;
    let url2 = `https://www.mplan.in/api/plans.php?apikey=ff7c4e87910a29fc6fa601dd4a8469b6&offer=roffer&tel=9033501636&operator=Jio`;

    console.log({ url2 });

    axios
      .get(url2)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <Form submitHandler={submitHandler}>
      <div className="form-group">
        <label className="form-label">DTH Operator</label>
        <select
          value={values.operator}
          name="operator"
          onChange={handlerChange}
          className="form-control"
        >
          {DTHOperator.length > 0 &&
            DTHOperator.map((operator, index) => {
              return (
                <option value={operator.key} key={index}>
                  {operator.value}
                </option>
              );
            })}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Smart Card Number</label>
        <input
          type="tel"
          name="tel"
          placeholder="Vc Number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          required
          value={values.tel}
          onChange={handlerChange}
          className={
            "form-control" + (submitted && !values.tel ? " is-invalid" : "")
          }
        />
        {submitted && !values.tel && (
          <div className="invalid-feedback">
            Enter your 11-digits Smart Card Number
          </div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Amount</label>
        <input
          type="number"
          placeholder="Amount"
          required
          name="amount"
          value={values.amount}
          onChange={handlerChange}
          className={
            "form-control" + (submitted && !values.amount ? " is-invalid" : "")
          }
        />
        {submitted && !values.amount && (
          <div className="invalid-feedback">Amount is required</div>
        )}
      </div>
    </Form>
  );
};

export default DTHService;
