import { useCallback } from "react";
import styles from "./RegistrationStepThree.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { RegistrationProps } from "../RegistrationProps.props";
import arrowBack from "../../../img/icons/arrow.jpg";
import { resendConfirmEmail } from "../../../redux/actions/Actions";
import AuthLocalStorage from "../../../helpers/AuthLocalStorage";

function RegistrationStepThree({ ...props }: RegistrationProps): JSX.Element {
  const handleStepBack = useCallback(() => {
    props.step(2);
  }, [props.step]);
  const dispatch = useDispatch();
  const handleConfirmEmail = () => {
    dispatch(resendConfirmEmail(AuthLocalStorage.getToken()));
  };

  return (
    <div>
      <div className={styles.titleWrapper}>
        <div className={styles.arrowBack} onClick={handleStepBack}>
          <div className={styles.arrow}>
            <img src={arrowBack}></img>
          </div>
          <div className={styles.back}>Back</div>
        </div>
        <div className={styles.title}>Check your e-mail</div>
      </div>
      <Box className={styles.formContent}>
        <div className={styles.residentText}>
          We have sent you an email. Check and confirm reset password.
        </div>

        <div className={styles.button}>
          <Button variant="contained" fullWidth onClick={handleConfirmEmail}>
            Confirm e-mail
          </Button>
        </div>
      </Box>
    </div>
  );
}
export default RegistrationStepThree;
