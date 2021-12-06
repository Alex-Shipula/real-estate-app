import { NavLink } from 'react-router-dom';

import styles from './MarketSinglePage.module.css';

import houseTest from "../../img/housesTest/house_1.png";
import houseTestSvg from "../../img/housesTest/house_3.svg";
import arrowBack from "../../../src/img/icons/arrow.jpg";
import buttonInvest from "../../img/buttons/buttonInvestNow.svg";
import forSaleImg from "../../img/forSaleIcon.svg";
import { InfoMarket } from '../../components/InfoMarket/InfoMarket';


function MarketSinglePage(): JSX.Element {


	return (
		<div className={styles.wrapperMarket}>
			<div className={styles.wrapperBackInvest}>
				<NavLink className={styles.arrowBack} to="/marketplace" >
					<div className={styles.arrow}>
						<img src={arrowBack}></img>
					</div>
					<div className={styles.back}>Back</div>
				</NavLink>
				<img className={styles.buttonInvest} src={buttonInvest}></img>
			</div>
			<div className={styles.wrapperTitle}>
				<div className={styles.titleLeft}>
					<div className={styles.titleRoadForSale}>
						<div className={styles.titleRoad}>Briercliff Road</div>
						<img src={forSaleImg} className={styles.titleForSale}></img>
					</div>
					<div className={styles.titleAddress}>4476 Briercliff Road, HUBBARD, Oregon, 97032</div>
				</div>
				<div className={styles.titleRight}>
					<div className={styles.titleTotal}>Total Investment</div>
					<div className={styles.titleSum}>$513,900.00</div>
				</div>
			</div>
			<div className={styles.wrapperContent}>
				<div className={styles.wrapperLeft}>
					<img className={styles.bigImage} src={houseTestSvg}></img>
					<div className={styles.wrapperLittleImages}>LITTLE</div>
					<div className={styles.wrapperMap}>MAP</div>
				</div>
				<div className={styles.wrapperRight}>
					<div className={styles.wrapperHaveAlready}>HAVE ALREADY</div>
					<div className={styles.wrapperRightGrid}>
						<div className={styles.wrapperInfo}>
							<InfoMarket textTop={"13.20%"} textBottom={"Expected Yield After Renovation & Stabilization"} infoIcon={false} infoPopup={false} />
							<InfoMarket textTop={"12.07%"} textBottom={"Expected Yield"} textInfo={"Expected yied is expressed as the Cap Rate (capitalization rate), the ratio of net operating income to the current value or sale price of a property. It determines the potential return on an investment."} infoIcon={true} infoPopup={false} />
							<InfoMarket textTop={"6.20 $ / year"} textBottom={"Rent per Token"} textInfo={"Ever needed to move? RealT tenants are no different. Sometimes, life happens. RealT manages all maintenance and tenancy responsibilities, so you dont have to. The cost of property maintenance is paid via the rental income of the property."} infoIcon={true} infoPopup={false} />
							<InfoMarket textTop={"-2,330.00 $"} textBottom={"Monthly Costs"} infoIcon={false} infoPopup={true} />
							<InfoMarket textTop={"513,900.00 $"} textBottom={"Total Investment"} textInfo={"Total Investment is currently calculated as Number of tokens x Token price. As a result of the two-decimal value of the Token Price^ Total Investment will typically exhibit a discrepancy of a few cents to a few dollars."} infoIcon={true} infoPopup={true} />
						</div>
						<div className={styles.wrapperFinancial}>FINANCIAL</div>
						<div className={styles.wrapperMaintenance}>MAINTENANCE</div>
						<div className={styles.wrapperProperty}>PROPERTY</div>
						<div className={styles.wrapperAbout}>ABOUT</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default MarketSinglePage;