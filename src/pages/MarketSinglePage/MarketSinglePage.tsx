import { NavLink } from 'react-router-dom';

import styles from './MarketSinglePage.module.css';

import houseTest from "../../img/housesTest/house_1.png";
import houseTestSvg from "../../img/housesTest/house_3.svg";
import arrowBack from "../../../src/img/icons/arrow.jpg";
import buttonInvest from "../../img/buttons/buttonInvestNow.svg";
import forSaleImg from "../../img/forSaleIcon.svg";


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
						<div className={styles.wrapperInfo}>INFO</div>
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