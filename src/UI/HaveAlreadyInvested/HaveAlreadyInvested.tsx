import styles from './HaveAlreadyInvested.module.css';

export const HaveAlreadyInvested = ({ ...props }): JSX.Element => {

    return (
        <div className={styles.wrapperInvested}>
            <div className={styles.textInvested}>
                You have already invested in this property for $<div style={{color: "green"}}>{props.amountInvest}(2%)</div> 
            </div>
        </div>
    )
}