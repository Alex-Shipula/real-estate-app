import { useEffect,useState } from 'react';
import styles from './HaveAlreadyInvested.module.css';

export const HaveAlreadyInvested = ({ ...props }): JSX.Element => {

    const [percent, setPercent] = useState(undefined);

    useEffect(() => {
        setPercent((props.amountInvest / (props.totalPrice / 100)).toFixed(4));
    },[props.amountInvest,props.totalPrice]);
      
    return (
        <div className={styles.wrapperInvested}>
            <div className={styles.textInvested}>
                You have already invested in this property for $<div style={{ color: "green" }}>{props.amountInvest}({isNaN(percent) ? 0 : percent}%)</div>
            </div>
        </div>
    )
}