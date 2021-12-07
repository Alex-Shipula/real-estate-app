import styles from './Maintenance.module.css';
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import logoCompound from '../../img/logoCompound.svg';

export const Maintenance = (): JSX.Element => {
    return (
        <Box className={styles.wrapperMaintenance}>
            <Paper className={styles.paper}>
                <div className={styles.wrapperContent}>
                    <div className={styles.title}>Maintenance Reserve</div>
                    <div className={styles.content}>
                        <img src={logoCompound} className={styles.logoCompound}></img>
                        <div className={styles.text}>We hold maintenance funds in USDS, a US-dollar stable coin. This gives us an excallent combination of stability and flexibility in the management of these funds.</div>
                    </div>
                </div>
            </Paper>
        </Box>
    )
}