import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Helper/LocalStorage";
import Menu from "./Menu";
import { handleAddAndChangePin } from "./store/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const getUserData = getUser();

const initialValues = {
  currentPin: "",
  newPin: "",
  confirmNewPin: "",
  hasTransactionPin: "",
};
const validationSchema = Yup.object().shape({
  currentPin: Yup.string()
    .trim()
    .when("hasTransactionPin", {
      is: true,
      then: Yup.string().trim().required("Current pin is required"),
    }),
  newPin: Yup.string().trim().required("New pin is required"),
  confirmNewPin: Yup.string()
    .trim()
    .required("Confirm pin is required")
    .oneOf(
      [Yup.ref("newPin"), null],
      "New pin and confirm pin is must be same"
    ),
});

const ChangePin = (props) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    setLoading(true);
    let payload = user?.hasTransactionPin
      ? {
          userId: user?.id,
          transactionPin: values?.currentPin,
          newTransactionPin: values?.newPin,
        }
      : {
          userId: user?.id,
          transactionPin: values?.newPin,
        };
    dispatch(
      handleAddAndChangePin(payload, (status) => {
        if (status) {
          formik.resetForm();
          setLoading(false);
          toast.success("pin updated successfully");
          formik.setFieldValue(
            "hasTransactionPin",
            user?.hasTransactionPin || false
          );
        }
      })
    );
  };

  useEffect(() => {
    if (user) {
      formik.setFieldValue(
        "hasTransactionPin",
        user?.hasTransactionPin || false
      );
    }
  }, [user]);

  return (
    <div className="bg-light">
      <Menu />
      <div className="container space-2">
        <div className="card">
          <div className="card-body">
            <form onSubmit={formik.handleSubmit} name="login-form">
              {formik?.values?.hasTransactionPin && (
                <div className="js-form-message mb-6">
                  <label className="form-label"> Current pin </label>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Enter your current pin"
                      // required
                      name="currentPin"
                      value={formik.values.currentPin}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        "form-control" +
                        (formik.errors.currentPin && formik.touched.currentPin
                          ? " is-invalid"
                          : "")
                      }
                    />
                    {formik.errors.currentPin && formik.touched.currentPin && (
                      <div className="invalid-feedback">
                        {formik.errors.currentPin}
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="mb-6">
                <div className="js-form-message">
                  <label className="form-label"> New pin </label>

                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Enter your pin"
                      // required
                      name="newPin"
                      value={formik.values.newPin}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={
                        "form-control" +
                        (formik.errors.newPin && formik.touched.newPin
                          ? " is-invalid"
                          : "")
                      }
                    />
                    {formik.errors.newPin && formik.touched.newPin && (
                      <div className="invalid-feedback">
                        {formik.errors.newPin}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <input
                type={"hidden"}
                name="hasTransactionPin"
                value={formik.values.hasTransactionPin}
              />
              <div className="js-form-message mb-6">
                <label className="form-label"> Confirm pin </label>

                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm your pin"
                    // required
                    name="confirmNewPin"
                    value={formik.values.confirmNewPin}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                      "form-control" +
                      (formik.errors.confirmNewPin &&
                      formik.touched.confirmNewPin
                        ? " is-invalid"
                        : "")
                    }
                  />
                  {formik.errors.confirmNewPin &&
                    formik.touched.confirmNewPin && (
                      <div className="invalid-feedback">
                        {formik.errors.confirmNewPin}
                      </div>
                    )}
                </div>
              </div>
              <div className="w-lg-50">
                <button
                  // onClick={(e) => submitHandler(e)}
                  type="submit"
                  className={`btn btn-sm btn-primary transition-3d-hover mr-2 ${
                    loading && "disabled"
                  }`}
                >
                  {loading ? "saving.." : "Save Transaction Pin"}
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-soft-secondary transition-3d-hover"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePin;
