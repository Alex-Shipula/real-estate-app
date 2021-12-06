import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from "react-redux";
import styles from './Marketplace.module.css';
import { Filters } from '../../components/Filters/Filters';
import { MarketplacePage } from '../../components/MarketplacePage/MarketplacePage';
import { getDataFilters } from '../../redux/actions/Actions';
import { Card } from "../../components/Card/Card";
import store from '../../redux/store';
import { DataTest } from '../../DataTest';

//Not working
const useFetching = (action:any,val:string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action(val));
  }, [])
};


function Marketplace(): JSX.Element {

  //Not working
  useFetching(getDataFilters,"page=1&orderby=description&desc=true&");

  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = useState(false);
  const [queryValues, setQueryValues] = useState();

  useEffect(() => {
    dispatch(getDataFilters(queryValues));
  }, [queryValues, showFilters]);

  let founded;
  const cards = useMemo(() => store.getState().data, []);
  const cardsArr = [];

  if (cards.rows) {
    console.log(cards.rows);
    founded = cards.rows.length;
    cards.rows.map((val) => {
      cardsArr.push(
        <Card
          id={val.id}
          forSale={true}
          img={"house_1.png"}
          totalPrice={val.total_tokens || 1000}
          tokenPrice={val.token_price || 0}
          district={val.neighborhood || 'No district'}
          address={val.address || 'No address'}
          expectedYield={12.03}
          rentPerToken={6.2}
          crossRent={80.0}
        />
      )
    })
  } else {
    console.log("CARDS TEST");
    founded = DataTest.rows.length;
    DataTest.rows.map((val) => {
      cardsArr.push(
        <Card
          id={val.id}
          forSale={true}
          img={"house_1.png"}
          totalPrice={val.total_tokens || 1000}
          tokenPrice={val.token_price || 0}
          district={val.neighborhood || 'No district'}
          address={val.address || 'No address'}
          expectedYield={9999}
          rentPerToken={9999}
          crossRent={9999}
        />
      )
    })
  }

  return (
    <div className={styles.wrapperMarket}>
      {showFilters ?
        <Filters showMarket={setShowFilters} setQueryValues={setQueryValues} />
        : <MarketplacePage founded={founded} cardsArr={cardsArr} showFiltersValue={showFilters} showFilters={setShowFilters} />
      }
    </div>
  );
}

export default Marketplace;
