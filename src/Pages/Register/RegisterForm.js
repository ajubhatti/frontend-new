import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import routes from "../../Helper/routes";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import ClickLoading from "../../Components/ClickLoading";
import queryString from "query-string";

const initialValues = {
  userName: "",
  phoneNumber: "",
  stateId: "",
  city: "",
  pincode: "",
  email: "",
  password: "",
  ConformPassword: "",
  referenceUserId: "",
};

// const phoneRegExp =
//   /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  userName: Yup.string().required("User name is required!"),
  phoneNumber: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits"),
  stateId: Yup.string().required("State is required!"),
  city: Yup.string().required("City is required!"),
  pincode: Yup.string()
    .required("Pin code is required!")
    .min(6, "Phone must be 6 digits")
    .max(6, "Phone must be 6 digits"),
  email: Yup.string()
    .email("Email format is not valid!")
    .required("Email is required!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password is must be greater than 6 digits")
    .max(20, "Password is too big."),
  ConformPassword: Yup.string()
    .required("Confirm password is required!")
    .min(6, "Confirm Password is must be greater than 6 digits")
    .max(20, "Confirm Password is too big.")
    .oneOf(
      [Yup.ref("password"), null],
      "Passwords and confirm password is not matched"
    ),
});

const RegisterForm = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [stateData, setStateData] = useState([]);
  const [apiCall, setApiCall] = useState(false);
  const [refererName, setRefererName] = useState("");
  const [checked, setChecked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  let queries = queryString.parse(location.search);

  useEffect(() => {
    const getStateListing = async () => {
      await props.stateListing().then((res) => {
        setStateData(res.data);
      });
    };

    getStateListing();
  }, [props]);

  const submitHandler = async (values) => {
    if (checked) {
      setApiCall(true);
      try {
        await props.register(values).then((res) => {
          toast.success(res.message);
          navigate(routes.otp, {
            state: {
              mobileNo: values.phoneNumber,
            },
          });
        });
      } finally {
        setApiCall(false);
      }
    } else {
      toast.error("please accept terms and conditions");
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      submitHandler(values);
    },
  });
  const loadingHandler = () => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    if (!!queries.token) {
      formik.resetForm({
        values: {
          ...formik.values,
          referenceUserId: queries.token,
        },
      });
    }
  }, []);

  useEffect(() => {
    referCodeChangeHandler(formik.values.referenceUserId);
  }, [formik.values.referenceUserId]);

  const referCodeChangeHandler = async (value) => {
    if (value.length >= 8) {
      props.getRefererUser({ code: value }).then((res) => {
        setRefererName(res.data.userName);
      });
    } else {
      setRefererName("");
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      name="register-form"
      className="sl-form"
    >
      <div className="form-group">
        <label className="form-label">
          Referral Code <small className="text-muted">(optional)</small>
        </label>
        <input
          type="text"
          placeholder="XXXXXX"
          name="referenceUserId"
          value={formik.values.referenceUserId}
          onChange={formik.handleChange}
          className="form-control"
        />
        <small
          className="valid-feedback"
          style={{ display: refererName.length > 0 ? "block" : "none" }}
        >
          {refererName}
        </small>
      </div>
      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          placeholder="As Per PAN Card"
          // required
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.userName && formik.touched.userName
              ? " is-invalid"
              : "")
          }
        />
        {formik.errors.userName && formik.touched.userName && (
          <div className="invalid-feedback">{formik.errors.userName}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Mobile Number</label>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Mobile Number"
          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          // required
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.phoneNumber && formik.touched.phoneNumber
              ? " is-invalid"
              : "")
          }
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && (
          <div className="invalid-feedback">{formik.errors.phoneNumber}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">State</label>
        <select
          value={formik.values.stateId}
          name="stateId"
          onChange={(e) => {
            formik.setFieldValue("stateId", e.target.value);
          }}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.stateId && formik.touched.stateId
              ? " is-invalid"
              : "")
          }
          placeholder="Please select state"
        >
          <option>Please select state</option>
          {stateData.length > 0 &&
            stateData.map((state, index) => {
              return (
                <option value={state._id} key={index}>
                  {state.stateName}
                </option>
              );
            })}
        </select>
        {formik.errors.stateId && formik.touched.stateId && (
          <div className="invalid-feedback">{formik.errors.stateId}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">City</label>
        <input
          type="text"
          placeholder="City/Address"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.city && formik.touched.city ? " is-invalid" : "")
          }
        />
        {formik.errors.city && formik.touched.city && (
          <div className="invalid-feedback">{formik.errors.city}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Pin Code</label>
        <input
          type="number"
          placeholder="Pin code"
          name="pincode"
          value={formik.values.pincode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.pincode && formik.touched.pincode
              ? " is-invalid"
              : "")
          }
        />
        {formik.errors.pincode && formik.touched.pincode && (
          <div className="invalid-feedback">{formik.errors.pincode}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          // required
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.email && formik.touched.email ? " is-invalid" : "")
          }
        />
        {formik.errors.email && formik.touched.email && (
          <div className="invalid-feedback">{formik.errors.email}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.password && formik.touched.password
              ? " is-invalid"
              : "")
          }
        />
        {formik.errors.password && formik.touched.password && (
          <div className="invalid-feedback">{formik.errors.password}</div>
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          placeholder="confirm password"
          // required
          name="ConformPassword"
          value={formik.values.ConformPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            "form-control" +
            (formik.errors.ConformPassword && formik.touched.ConformPassword
              ? " is-invalid"
              : "")
          }
        />
        {formik.errors.ConformPassword && formik.touched.ConformPassword && (
          <div className="invalid-feedback">
            {formik.errors.ConformPassword}
          </div>
        )}
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox d-flex align-items-center text-muted">
          <input
            type="checkbox"
            className="custom-control-input"
            id="termsCheckbox"
            value=""
            onClick={(e) => setChecked(e.target.checked)}
          />
          <label className="custom-control-label" htmlFor="termsCheckbox">
            <small>
              I agree to the {""}
              <Link to={routes.terms} className="link-muted">
                Terms and Conditions
              </Link>
            </small>
          </label>
        </div>
      </div>

      <div className="register-card">
        <div className="inner-register-card">
          <span className="small text-muted">Already have an account?</span>
          <Link to={routes.login} className="ml-1 small">
            Sign In
          </Link>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-md"
          disabled={apiCall}
          onClick={loadingHandler}
        >
          {isLoading ? <ClickLoading /> : <span>Submit</span>}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
