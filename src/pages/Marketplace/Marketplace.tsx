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


  const [showFilters, setShowFilters] = useState(false);
  const [queryValues, setQueryValues] = useState("page_size=8&page=1&orderby=description&desc=true");

  useEffect(() => {
    dispatch(getDataFiltersToken(Token, queryValues));
  }, [queryValues, showFilters]);

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
        <Filters showMarket={setShowFilters} setQueryValues={setQueryValues} />
        : <MarketplacePage founded={dataMap.length} cardsArr={dataMap} showFiltersValue={showFilters} showFilters={setShowFilters} />
      }
    </div>
  );
}

export default Marketplace;

