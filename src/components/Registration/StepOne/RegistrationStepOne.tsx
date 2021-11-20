import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./RegistrationStepOne.module.css";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { signUpData } from "../../../redux/actions/Actions";

function RegistrationStepOne(): JSX.Element {
  const [values, setValues] = useState({
    showPassword: false,
  });
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(9)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/,
        "Must contain at least one number,one uppercase,lowercase letter,one special character, and at least 9 or more characters"
      )
      .required(
        "Must contain at least one number,one uppercase,lowercase letter,one special character, and at least 9 or more characters"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      delete values.confirmPassword;
      dispatch(signUpData(values));
    },
  });

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  return (
    <form className={styles.formReg} onSubmit={formik.handleSubmit}>
      <div className={styles.title}>Register</div>
      <Box className={styles.formContent}>
        <div className={styles.input}>
          <div className={styles.titleName}>
            Username <div style={{ color: "red" }}>*</div>
          </div>
          <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
            <OutlinedInput
              id="username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              placeholder="Enter your Username"
            />
            <FormHelperText>
              {formik.touched.username && formik.errors.username}
            </FormHelperText>
          </FormControl>
        </div>
        <div className={styles.input}>
          <div className={styles.titleName}>
            E-mail <div style={{ color: "red" }}>*</div>
          </div>
          <FormControl
            className={styles.input}
            sx={{ m: 1, width: "50ch" }}
            variant="outlined"
          >
            <OutlinedInput
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              placeholder="Enter your E-mail"
            />
            <FormHelperText>
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </FormControl>
        </div>
        <div className={styles.input}>
          <div className={styles.titleName}>
            Create Password <div style={{ color: "red" }}>*</div>
          </div>
          <FormControl
            className={styles.input}
            sx={{ m: 1, width: "50ch" }}
            variant="outlined"
          >
            <OutlinedInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              {formik.touched.password && formik.errors.password}
            </FormHelperText>
          </FormControl>
        </div>
        <div className={styles.input}>
          <div className={styles.titleName}>
            Confirm Password <div style={{ color: "red" }}>*</div>
          </div>
          <FormControl
            className={styles.input}
            sx={{ m: 1, width: "50ch" }}
            variant="outlined"
          >
            <OutlinedInput
              id="confirmPassword"
              type={values.showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>
              {formik.touched.confirmPassword && formik.errors.confirmPassword}
            </FormHelperText>
          </FormControl>
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
            REGISTER
          </Button>
        </div>
        <NavLink className={styles.alreadyHave} to="/login">
          Already have an Account Log In
        </NavLink>
      </Box>
    </form>
  );
}
export default RegistrationStepOne;
