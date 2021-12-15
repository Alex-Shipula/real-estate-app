
import styles from './InfoMarket.module.css';
import { InfoPopup } from '../../UI/InfoPopup';
import { InfoIcon } from '../../UI/InfoIcon/InfoIcon';
import { InfoMarketProps } from './InfoMarket.props';



export const InfoMarket = ({ ...props }: InfoMarketProps): JSX.Element => {

    return (
        <div className={styles.wrapperInfo}>
            <div></div>
            <div className={styles.wrapperText}>
                <div className={styles.textTop}>{props.textTop}</div>
                <div className={styles.wrapperBottom}>
                    <div className={styles.textBottom}>{props.textBottom}</div>
                    {props.infoIcon ? <InfoIcon textInfo={props.textInfo} /> : <div></div>}
                </div>
            </div>
            {props.infoPopup ? <InfoPopup
                assetPrice={props.assetPrice}
                listingFee={props.listingFee}
                initialMain={props.initialMain}
                initialRenov={props.initialRenov}
                propertyManag={props.propertyManag}
                realtPlatf={props.realtPlatf}
                maintenance={props.maintenance}
                propertyTaxes={props.propertyTaxes}
                incurance={props.incurance}
                utilities={props.utilities} /> : <div></div>}
        </div>
    )
}