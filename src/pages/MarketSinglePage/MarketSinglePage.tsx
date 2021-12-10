import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MarketSinglePage.module.css';
import forSaleImg from "../../img/forSaleIcon.svg";
import { InfoMarket } from '../../components/InfoMarket/InfoMarket';
import { Financial } from '../../components/Financial/Financial';
import { Maintenance } from '../../UI/Maintenance/Maintenance';
import { PropertyHighlights } from '../../components/PropertyHighlights/PropertHighlights';
import houseTest from "../../img/housesTest/house_1.png";
import houseTestSvg from "../../img/housesTest/house_3.svg";
import arrowBack from "../../../src/img/icons/arrow.jpg";
import buttonAddMeta from "../../img/buttons/addMetamask.svg";
import MapGoogle from "../../components/MapGoogle/MapGoogle";
import { PopupInvest } from '../../UI/PopupInvest/PopupInvest';
import { HaveAlreadyInvested } from '../../UI/HaveAlreadyInvested/HaveAlreadyInvested';



function isMetaMaskInstalled(): boolean {
	return Boolean(window.ethereum.isMetaMask)
}
function openMetamask() {
	window.open('https://metamask.io/', "_self");
}


function MarketSinglePage(): JSX.Element {

	const [account, setAccount] = useState(null);
	const [metamaskIsTrue, setMetamaskIsTrue] = useState(false);
	const [amountInvest, setAmountInvest] = useState(300);
    const [transactionHash, setTransactionHash] = useState(1);

	
	useEffect(() => {
		setMetamaskIsTrue(isMetaMaskInstalled());
	}, [metamaskIsTrue]);

	useEffect(() => {
		if (metamaskIsTrue) {
			setAccount(window.ethereum.selectedAddress)
		}
	}, [account, metamaskIsTrue]);
	
	if (metamaskIsTrue) {
		window.ethereum.on("accountsChanged", () => { setAccount(window.ethereum.selectedAddress) })
	}

	const handlerAddMetamask = () => {
		if (metamaskIsTrue) {
			window.ethereum.request({ method: 'eth_requestAccounts' });
		} else {
			openMetamask();
		}
	}

	const [centerMap, setCenterMap] = useState({
		lat: 48.89686,
		lng: 36.00900,
	});

	const [zoom, setZoom] = useState(15);
	const handlerZoom = () => {
		setZoom(16);
		setCenterMap({
			lat: 47.896354,
			lng: 38.009001,
		})
	};


	return (
		<div className={styles.wrapperMarket}>
			<div className={styles.wrapperBackInvest}>
				<NavLink className={styles.arrowBack} to="/marketplace" >
					<div className={styles.arrow}>
						<img src={arrowBack}></img>
					</div>
					<div className={styles.back}>Back</div>
				</NavLink>
				{account ? <PopupInvest setAmountInvest={setAmountInvest} setTransactionHash={setTransactionHash} neighborhood="No road" address="No address"/> :
					<div className={styles.wrapperAddMeta}>
						<div className={styles.textAddMeta}>To start invest You have to</div>
						<img className={styles.buttonAddMeta} src={buttonAddMeta} onClick={handlerAddMetamask}></img>
					</div>}
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
					<img className={styles.bigImage} src={houseTest}></img>
					<div className={styles.wrapperLittleImages}>
						<img className={styles.littleImage} src={houseTest}></img>
						<img className={styles.littleImage} src={houseTest}></img>
						<img className={styles.littleImage} src={houseTest}></img>
					</div>
					<div className={styles.wrapperMap} onClick={handlerZoom}>
						<MapGoogle center={centerMap} zoom={zoom} />
					</div>
				</div>
				<div className={styles.wrapperRight}>
					{ transactionHash ? <div className={styles.wrapperHaveAlready}>
						<HaveAlreadyInvested  amountInvest={amountInvest}/>
					</div> : <div></div> }
					<div className={styles.wrapperRightGrid}>
						<div className={styles.wrapperInfo}>
							<InfoMarket textTop={"13.20%"} textBottom={"Expected Yield After Renovation & Stabilization"} infoIcon={false} infoPopup={false} />
							<InfoMarket textTop={"12.07%"} textBottom={"Expected Yield"} textInfo={"Expected yied is expressed as the Cap Rate (capitalization rate), the ratio of net operating income to the current value or sale price of a property. It determines the potential return on an investment."} infoIcon={true} infoPopup={false} />
							<InfoMarket textTop={"6.20 $ / year"} textBottom={"Rent per Token"} textInfo={"Ever needed to move? RealT tenants are no different. Sometimes, life happens. RealT manages all maintenance and tenancy responsibilities, so you dont have to. The cost of property maintenance is paid via the rental income of the property."} infoIcon={true} infoPopup={false} />
							<InfoMarket textTop={"-2,330.00 $"} textBottom={"Monthly Costs"} infoIcon={false} infoPopup={true} assetPrice={382500.01} listingFee={51388.89} initialMain={15000.00}
								initialRenov={65000.00} />
							<InfoMarket textTop={"513,900.00 $"} textBottom={"Total Investment"} textInfo={"Total Investment is currently calculated as Number of tokens x Token price. As a result of the two-decimal value of the Token Price^ Total Investment will typically exhibit a discrepancy of a few cents to a few dollars."} infoIcon={true} infoPopup={true}
								propertyManag={600.00}
								realtPlatf={150.00}
								maintenance={600.00}
								propertyTaxes={750.00}
								incurance={230.00}
								utilities={"Tenant-paid"} />
						</div>
						<div className={styles.wrapperFinancial}>
							<Financial rentYear={90000.01} rentMonth={7500.01} netYear={62040.01} netMonth={5170.01} tokenPrice={51.39} totalTokens={10000} startDate={"2021-09-01"} endDate={"2021-08-25"} />
						</div>
						<div className={styles.wrapperMaintenance}>
							<Maintenance />
						</div>
						<div className={styles.wrapperProperty}>
							<PropertyHighlights titleProperty={"Multi Family"} constrYear={1947} neighborhood={"Ottawa"} squareFeet={14448} lotSize={6022} totalUnits={12} bedroom={"6x2, 6x3"} bath={"12x1"} rented={"Fully Rented"} section8={"No"} />
						</div>
						<div className={styles.wrapperAbout}>
							<div className={styles.titleAbout}>About the Property</div>
							<div className={styles.textAbout}>This three bedroom, one bath is a single-family home located in a very quiet, charming neighborhood whose streets are lined with brick homes and sidewalks.</div>
							<div className={styles.textAbout}>The property is being renovated by the seller, including a new roof in September.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default MarketSinglePage;