import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { CheckLg } from "react-bootstrap-icons";
import { walletBalanceUpdate } from "../store/actions";
import { getUser } from "../../../Helper/LocalStorage";

const getUserData = getUser();

const initialValues = {
  PayerType: "",
  requestAmount: "",
  slipNo: "",
  paymentType: "",
  remark: "",
  userId: getUserData?.id,
};

const validationSchema = Yup.object().shape({
  PayerType: Yup.string().required("Please select the bank"),
  requestAmount: Yup.number()
    .positive("Amount is must be greater than 0")
    .integer("Amount is must be greater than 0")
    .required("Amount is required"),
  slipNo: Yup.number()
    .positive("Transaction number is must be greater than 0")
    .integer("Transaction number is must be greater than 0")
    .required("Transaction number is required"),
  paymentType: Yup.string().required("Please select the type"),
});
const PaymentDetail2 = (props) => {
  const cancelHandler = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const saveAndContinue = (values) => {
    // e.preventDefault();
    // props.nextStep();
    // alert(JSON.stringify(values, null, 2));
    // dispatch(
    //   walletBalanceUpdate(values, (status) => {
    //     if (status) {
    //       // cancelHandler()
    //       props.prevStep();
    //       resetForm();
    //       setFieldValue(initialValues);
    //       // setFieldValue("paymentType", "");
    //     }
    //   })
    // );
  };

  const { type } = useSelector((state) => state.profileReducer);

  const dispatch = useDispatch();

  const {
    handleChange,
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    setFieldValue,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      saveAndContinue(values);
    },
  });
  const [selectedBankDetail, setSelectedBankDetail] = useState({});

  useEffect(() => {
    const res = props.list.find((x) => x._id === values.PayerType);
    setSelectedBankDetail(values.PayerType ? res : {});
  }, [values.PayerType]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-12 mb-4">
          <label className="form-label">Select Payer</label>
          <select
            className="custom-select custom-select-sm"
            name="PayerType"
            onChange={(e) => setFieldValue("PayerType", e.target.value)}
            onBlur={handleBlur}
          >
            <option value={""}>Select the bank</option>
            {props.list.length > 0 &&
              props.list.map((bank, index) => {
                return (
                  <option value={bank?._id} key={bank?.bankId + index}>
                    {bank?.bankName} - {bank?.ifscCode}
                  </option>
                );
              })}
          </select>
          {errors.PayerType && touched.PayerType && (
            <span className="text-danger" style={{ fontSize: "12px" }}>
              {errors.PayerType}
            </span>
          )}

          {Object.keys(selectedBankDetail).length ? (
            <div className="ml-2">
              <div>{selectedBankDetail.accountName}</div>
              <div>{selectedBankDetail.accountNo}</div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-4">
          <label className="form-label">Amount</label>
          <div className="js-form-message u-has-success">
            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                name="requestAmount"
                value={values.requestAmount}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="00000"
              />
            </div>
            {errors.requestAmount && touched.requestAmount && (
              <span className="text-danger" style={{ fontSize: "12px" }}>
                {errors.requestAmount}
              </span>
            )}
          </div>
        </div>
        <div className="col-sm-6 mb-4">
          <label className="form-label">Transaction No</label>
          <div className="js-form-message u-has-success">
            <div className="input-group input-group-sm">
              <input
                type="number"
                className="form-control"
                name="slipNo"
                value={values.slipNo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="0000"
              />
            </div>
            {errors.slipNo && touched.slipNo && (
              <span className="text-danger" style={{ fontSize: "12px" }}>
                {errors.slipNo}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mb-4">
          <label className="form-label">Type</label>
          <select
            className="custom-select custom-select-sm"
            name="paymentType"
            onChange={(e) => setFieldValue("paymentType", e.target.value)}
            onBlur={handleBlur}
          >
            <option value={""}>Select the type</option>
            {type.length !== 0 &&
              type?.map((item) => (
                <option value={item?._id}>{item?.modeName}</option>
              ))}
          </select>
          {errors.paymentType && touched.paymentType && (
            <span className="text-danger" style={{ fontSize: "12px" }}>
              {errors.paymentType}
            </span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label className="form-label">Remark</label>
        <div className="js-form-message">
          <div className="input-group input-group-sm">
            <textarea
              className="form-control"
              rows="2"
              name="remark"
              value={values?.remark || ""}
              onChange={handleChange}
              placeholder="Your payer will see this description on the payment request"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button
          type="Submit"
          className="btn btn-primary transition-3d-hover mr-1"
          // onClick={saveAndContinue}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-soft-secondary transition-3d-hover mr-1"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PaymentDetail2;
