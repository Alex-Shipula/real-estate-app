
import styles from './Financial.module.css';
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

interface FinancialProps {
    rentYear: number;
    rentMonth: number;
    netYear: number;
    netMonth: number;
    tokenPrice: number;
    totalTokens: number;
    startDate: string;
    endDate: string;
}
export const Financial = ({ ...props }: FinancialProps): JSX.Element => {

    return (
        <Box className={styles.wrapperFinancial}>
            <Paper className={styles.paper}>
                <div className={styles.wrapperContent}>
                    <div className={styles.title}>Financials</div>
                    <div className={styles.content}>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Gross Rent / year</div>
                            <div className={styles.contentValue}>{props.rentYear} $</div>
                        </div>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Gross Rent / month</div>
                            <div className={styles.contentValue}>{props.rentMonth} $</div>
                        </div>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Net Rent / year</div>
                            <div className={styles.contentValue}>{props.netYear} $</div>
                        </div>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Net Rent / month</div>
                            <div className={styles.contentValue}>{props.netMonth} $</div>
                        </div>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Token Price</div>
                            <div className={styles.contentValue}>{props.tokenPrice} $</div>
                        </div>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Total Tokens</div>
                            <div className={styles.contentValue}>{props.totalTokens} $</div>
                        </div>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Rent Start Date</div>
                            <div className={styles.contentValue}>{props.startDate}</div>
                        </div>
                        <div className={styles.contentWrap}>
                            <div className={styles.contentTitle}>Crowdfunding End Date</div>
                            <div className={styles.contentValue}>{props.endDate}</div>
                        </div>

                    </div>
                </div>
            </Paper>
        </Box>
    )
}