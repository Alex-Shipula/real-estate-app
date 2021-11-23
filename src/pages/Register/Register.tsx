import styles from "./Register.module.css";
import { useState } from "react";

import RegistrationStepOne from "../../components/Registration/StepOne/RegistrationStepOne";
import RegistrationStepTwo from "../../components/Registration/StepTwo/RegistrationStepTwo";
import RegistrationStepThree from "../../components/Registration/StepThree/RegistrationStepThree";

function Register(): JSX.Element {
  const [step, setStep] = useState(1);

  return (
    <div className={styles.wrapperRegister}>
      {(step === 1 && <RegistrationStepOne step={setStep} />) ||
        (step === 2 && <RegistrationStepTwo step={setStep} />) ||
        (step === 3 && <RegistrationStepThree step={setStep} />)}
    </div>
  );
}
export default Register;
