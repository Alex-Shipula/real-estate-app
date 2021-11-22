import { useState, useCallback } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./RegistrationStepTwo.module.css";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import { useDispatch } from "react-redux";
import { RegistrationProps } from "../RegistrationProps.props";
import arrowBack from "../../../img/icons/arrow.jpg";

function RegistrationStepTwo({ ...props }: RegistrationProps): JSX.Element {
  const [selectedResident, setSelectedResident] = useState("no");
  const handleChangeResident = (event) => {
    setSelectedResident(event.target.value);
    formik.values.resident = event.target.value;
  };

  const handleStepNext = useCallback(() => {
    props.step(3);
  }, [props.step]);

  const handleStepBack = useCallback(() => {
    props.step(1);
  }, [props.step]);

  const dispatch = useDispatch();

  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Phone is required"),
    resident: yup.string().required("Resident is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      resident: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleStepNext();
      console.log(values);
    },
  });

  return (
    <form className={styles.formReg} onSubmit={formik.handleSubmit}>
      <div className={styles.titleWrapper}>
        <div className={styles.arrowBack} onClick={handleStepBack}>
          <div className={styles.arrow}>
            <img src={arrowBack}></img>
          </div>
          <div className={styles.back}>Back</div>
        </div>
        <div className={styles.title}>Personal Info</div>
      </div>
      <Box className={styles.formContent}>
        <div className={styles.input}>
          <div className={styles.titleName}>
            First Name <div style={{ color: "red" }}>*</div>
          </div>
          <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
            <OutlinedInput
              id="firstName"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              placeholder="Enter your First Name"
            />
            <FormHelperText>
              {formik.touched.firstName && formik.errors.firstName}
            </FormHelperText>
          </FormControl>
        </div>
        <div className={styles.input}>
          <div className={styles.titleName}>
            Last Name <div style={{ color: "red" }}>*</div>
          </div>
          <FormControl
            className={styles.input}
            sx={{ m: 1, width: "50ch" }}
            variant="outlined"
          >
            <OutlinedInput
              id="lastName"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              placeholder="Enter your Last Name"
            />
            <FormHelperText>
              {formik.touched.lastName && formik.errors.lastName}
            </FormHelperText>
          </FormControl>
        </div>
        <div className={styles.input}>
          <div className={styles.titleName}>
            Phone <div style={{ color: "red" }}>*</div>
          </div>
          <FormControl
            className={styles.input}
            sx={{ m: 1, width: "50ch" }}
            variant="outlined"
          >
            <OutlinedInput
              id="phone"
              name="phone"
              placeholder="Enter your Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
            />
            <FormHelperText>
              {formik.touched.phone && formik.errors.phone}
            </FormHelperText>
          </FormControl>
        </div>
        <div className={styles.residentText}>
          Are you a resident or citizen of the united states or its territories?*
         </div> 
        <div className={styles.radioWrapper}>
          <div className={styles.radio}>
            <Radio
              checked={selectedResident === "yes"}
              onChange={handleChangeResident}
              value="yes"
              name="radio-buttons"
              inputProps={{ "aria-label": "YES" }}
            />
            <div className={styles.yesNo}>YES</div>
          </div>
          <div className={styles.radio}>
            <Radio
              checked={selectedResident === "no"}
              onChange={handleChangeResident}
              value="no"
              name="radio-buttons"
              inputProps={{ "aria-label": "NO" }}
            />
            <div className={styles.yesNo}>NO</div>
          </div>
        </div>

        <div className={styles.textPrivacy}>
          <div>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
          </div>
          <NavLink className={styles.privacy} to="/privacy">
            privacy policy.
          </NavLink>
        </div>
        <div className={styles.button}>
          <Button variant="contained" fullWidth type="submit">
            GET START
          </Button>
        </div>
        <div className={styles.skip} onClick={handleStepNext}>
          Skip
        </div>
      </Box>
    </form>
  );
}
export default RegistrationStepTwo;
