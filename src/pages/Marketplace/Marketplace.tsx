import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import styles from './Marketplace.module.css';
import { Filters } from '../../components/Filters/Filters';
import { MarketplacePage } from '../../components/MarketplacePage/MarketplacePage';
import { getDataFiltersToken } from '../../redux/actions/Actions';
import { Card } from "../../components/Card/Card";
import { isEmpty } from 'lodash';
import { Token } from '../../Token';

function Marketplace(): JSX.Element {

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data.rows);
  const countFounded = useSelector((state: any) => state.data.count);

  const [sort, setSort] = useState("&orderby=description&desc=true");
  const [page, setPage] = useState(1);

  const [showFilters, setShowFilters] = useState(false);
  const [queryValues, setQueryValues] = useState("");

  const [valueSlider, setValueSlider] = useState([0, 100]);

  const [bedroomsFrom, setBedroomsFrom] = useState(0);
  const [bedroomsTo, setBedroomsTo] = useState(0);

  const [bathsFrom, setBathsFrom] = useState(0);
  const [bathsTo, setBathsTo] = useState(0);

  const [totalUnitsFrom, setTotalUnitsFrom] = useState(0);
  const [totalUnitsTo, setTotalUnitsTo] = useState(0);

  const [squareFeetFrom, setSquareFeetFrom] = useState(0);
  const [squareFeetTo, setSquareFeetTo] = useState(0);

  useEffect(() => {
    setQueryValues(`page_size=8&page=${page}${sort}${(bedroomsFrom === 0) ? "" : `&bedroom_from=${bedroomsFrom}`}${(bedroomsTo === 0) ? "" : `&bedroom_to=${bedroomsTo}`}${(bathsFrom === 0) ? "" : `&bath_from=${bathsFrom}`}${(bathsTo === 0) ? "" : `&bath_to=${bathsTo}`}${(totalUnitsFrom === 0) ? "" : `&units_from=${totalUnitsFrom}`}${(totalUnitsTo === 0) ? "" : `&units_to=${totalUnitsTo}`}${(squareFeetFrom === 0) ? "" : `&square_from=${squareFeetFrom}`}${(squareFeetTo === 0) ? "" : `&square_to=${squareFeetTo}`}&total_price_from=${valueSlider[0] * 10000}&total_price_to=${valueSlider[1] * 100000}`)
  }, [bedroomsFrom, bedroomsTo, bathsFrom, bathsTo, totalUnitsFrom, totalUnitsTo, squareFeetFrom, squareFeetTo, page, sort, valueSlider]);

  useEffect(() => {
    dispatch(getDataFiltersToken(Token, queryValues));
  }, [queryValues, showFilters]);

  const handlerClearAll = (): void => {
    setSort("&orderby=description&desc=true");
    setPage(1);
    setValueSlider([0, 100]);
    setBedroomsFrom(0);
    setBedroomsTo(0);
    setBathsFrom(0);
    setBathsTo(0);
    setTotalUnitsFrom(0);
    setTotalUnitsTo(0);
    setSquareFeetFrom(0);
    setSquareFeetTo(0);
  }

  let dataMap = [];

  !isEmpty(data) ? dataMap = data.map((val) => (
    <Card
      id={val.id}
      forSale={true}
      img={!isEmpty(val.files) ? val.files[0].url : null}
      totalPrice={val.total_price || "No info"}
      tokenPrice={val.token_price || "No info"}
      district={val.neighborhood || 'No district'}
      address={val.address || 'No address'}
      expectedYield={12.03}
      rentPerToken={6.2}
      crossRent={80.0}
    />
  )) : dataMap.push(<Card
    id={"TEST"}
    forSale={true}
    img={null}
    totalPrice={50000}
    tokenPrice={1000}
    district={'Briercliff Road'}
    address={'4476 Briercliff Road, HUBBARD, Oregon, 97032'}
    expectedYield={12.03}
    rentPerToken={6.2}
    crossRent={80.0}
  />)

  return (
    <div className={styles.wrapperMarket}>
      {showFilters ?
        <Filters showMarket={setShowFilters} clearAll={handlerClearAll} valueSlider={valueSlider} setValueSlider={setValueSlider} bedroomsFrom={bedroomsFrom} setBedroomsFrom={setBedroomsFrom}
          bedroomsTo={bedroomsTo} setBedroomsTo={setBedroomsTo} bathsFrom={bathsFrom} setBathsFrom={setBathsFrom} bathsTo={bathsTo} setBathsTo={setBathsTo} totalUnitsFrom={totalUnitsFrom}
          setTotalUnitsFrom={setTotalUnitsFrom} totalUnitsTo={totalUnitsTo} setTotalUnitsTo={setTotalUnitsTo} squareFeetFrom={squareFeetFrom} setSquareFeetFrom={setSquareFeetFrom}
          squareFeetTo={squareFeetTo} setSquareFeetTo={setSquareFeetTo} />
        : <MarketplacePage setSort={setSort} clearAll={handlerClearAll} setPage={setPage} founded={countFounded} cardsArr={dataMap} showFiltersValue={showFilters} showFilters={setShowFilters} />
      }
    </div>
  );
}

export default Marketplace;

