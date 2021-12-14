import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import styles from './MarketSinglePage.module.css';
import forSaleImg from "../../img/forSaleIcon.svg";
import { InfoMarket } from '../../components/InfoMarket/InfoMarket';
import { Financial } from '../../components/Financial/Financial';
import { Maintenance } from '../../UI/Maintenance/Maintenance';
import { PropertyHighlights } from '../../components/PropertyHighlights/PropertyHighlights';
import notImage from "../../img/noImage.png";
import arrowBack from "../../../src/img/icons/arrow.jpg";
import buttonAddMeta from "../../img/buttons/addMetamask.svg";
import MapGoogle from "../../components/MapGoogle/MapGoogle";
import { PopupInvest } from '../../UI/PopupInvest/PopupInvest';
import { HaveAlreadyInvested } from '../../UI/HaveAlreadyInvested/HaveAlreadyInvested';
import { isEmpty } from 'lodash';



function isMetaMaskInstalled(): boolean {
	return Boolean(window.ethereum.isMetaMask)
}
function openMetamask() {
	window.open('https://metamask.io/', "_self");
}
function GetPropertiesIdFromURL() {
	const url = window.location.href;
	const propertiesId = url.substr(url.lastIndexOf("/") + 1, (url.length - url.lastIndexOf("/") - 1))
	return propertiesId;
}


function MarketSinglePage(): JSX.Element {

	const dataId = useSelector((state: any) => state.dataPropertiesId);

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
		setZoom(17);
		setCenterMap(dataId.coordinates ? dataId.coordinates : {
			lat: 48.89686,
			lng: 36.00900,
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
				{account ? <PopupInvest setAmountInvest={setAmountInvest} setTransactionHash={setTransactionHash} neighborhood={dataId.neighborhood ? dataId.neighborhood : "No road"} address={dataId.address ? dataId.address : "No address"} /> :
					<div className={styles.wrapperAddMeta}>
						<div className={styles.textAddMeta}>To start invest You have to</div>
						<img className={styles.buttonAddMeta} src={buttonAddMeta} onClick={handlerAddMetamask}></img>
					</div>}
			</div>
			<div className={styles.wrapperTitle}>
				<div className={styles.titleLeft}>
					<div className={styles.titleRoadForSale}>
						<div className={styles.titleRoad}>{dataId.neighborhood ? dataId.neighborhood : "No road"}</div>
						<img src={forSaleImg} className={styles.titleForSale}></img>
					</div>
					<div className={styles.titleAddress}>{dataId.address ? dataId.address : "No address"}</div>
				</div>
				<div className={styles.titleRight}>
					<div className={styles.titleTotal}>Total Investment</div>
					<div className={styles.titleSum}>$ {dataId.total_price ? dataId.total_price : "No info"}</div>
				</div>
			</div>
			<div className={styles.wrapperContent}>
				<div className={styles.wrapperLeft}>
					<img className={styles.bigImage} src={!isEmpty(dataId.files) ? dataId.files[0].url : notImage}></img>
					<div className={styles.wrapperLittleImages}>
						<img className={styles.littleImage} src={!isEmpty(dataId.files) ? dataId.files[0].url : notImage}></img>
						<img className={styles.littleImage} src={!isEmpty(dataId.files) ? dataId.files.length === 2 ? dataId.files[1].url : notImage : notImage}></img>
						<img className={styles.littleImage} src={!isEmpty(dataId.files) ? dataId.files.length === 3 ? dataId.files[2].url : notImage : notImage}></img>
					</div>
					<div className={styles.wrapperMap} onClick={handlerZoom}>
						<MapGoogle center={centerMap} zoom={zoom} />
					</div>
				</div>
				<div className={styles.wrapperRight}>
					{transactionHash ? <div className={styles.wrapperHaveAlready}>
						<HaveAlreadyInvested amountInvest={amountInvest} />
					</div> : <div></div>}
					<div className={styles.wrapperRightGrid}>
						<div className={styles.wrapperInfo}>
							<InfoMarket textTop={"13.20%"} textBottom={"Expected Yield After Renovation & Stabilization"} infoIcon={false} infoPopup={false} />
							<InfoMarket textTop={"12.07%"} textBottom={"Expected Yield"} textInfo={"Expected yied is expressed as the Cap Rate (capitalization rate), the ratio of net operating income to the current value or sale price of a property. It determines the potential return on an investment."} infoIcon={true} infoPopup={false} />
							<InfoMarket textTop={"6.20 $ / year"} textBottom={"Rent per Token"} textInfo={"Ever needed to move? RealT tenants are no different. Sometimes, life happens. RealT manages all maintenance and tenancy responsibilities, so you dont have to. The cost of property maintenance is paid via the rental income of the property."} infoIcon={true} infoPopup={false} />
							<InfoMarket textTop={"-2,330.00 $"} textBottom={"Monthly Costs"} infoIcon={false} infoPopup={true} assetPrice={382500.01} listingFee={51388.89} initialMain={15000.00}
								initialRenov={65000.00} />
							<InfoMarket textTop={dataId.total_price ? `${dataId.total_price} $` : "No info"} textBottom={"Total Investment"} textInfo={"Total Investment is currently calculated as Number of tokens x Token price. As a result of the two-decimal value of the Token Price^ Total Investment will typically exhibit a discrepancy of a few cents to a few dollars."} infoIcon={true} infoPopup={true}
								propertyManag={600.00}
								realtPlatf={150.00}
								maintenance={600.00}
								propertyTaxes={750.00}
								incurance={230.00}
								utilities={"Tenant-paid"} />
						</div>
						<div className={styles.wrapperFinancial}>
							<Financial rentYear={90000.01} rentMonth={7500.01} netYear={62040.01} netMonth={5170.01} tokenPrice={dataId.token_price ? dataId.token_price : "No info"} totalTokens={dataId.total_tokens ? dataId.total_tokens : "No info"} startDate={dataId.start_date ? dataId.start_date.substr(0, 10) : "No info"} endDate={dataId.end_date ? dataId.end_date.substr(0, 10) : "No info"} />
						</div>
						<div className={styles.wrapperMaintenance}>
							<Maintenance />
						</div>
						<div className={styles.wrapperProperty}>
							<PropertyHighlights titleProperty={dataId.type ? dataId.type : "No info"} constrYear={dataId.construction_year ? dataId.construction_year : "No info"} neighborhood={dataId.neighborhood ? dataId.neighborhood : "No road"} squareFeet={dataId.square_feet ? dataId.square_feet : "No info"} lotSize={dataId.lot_size ? dataId.lot_size : "No info"} totalUnits={dataId.total_units ? dataId.total_units : "No info"} bedroom={dataId.bedroom ? dataId.bedroom : "No info"} bath={dataId.bath ? dataId.bath : "No info"} rented={dataId.rented ? "Fully Rented" : "No info"} section8={"No"} />
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