
import styles from './Register.module.css';

import RegistrationStepOne from "../../components/Registration/StepOne/RegistrationStepOne";

function Register(): JSX.Element {
	return (
		<div className={styles.wrapperRegister}>
			<RegistrationStepOne />
		</div>
	);
}
export default Register;