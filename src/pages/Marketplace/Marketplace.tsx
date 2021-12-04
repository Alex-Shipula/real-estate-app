import { useEffect, useState, useMemo } from 'react';
import { useDispatch } from "react-redux";
import { Filters } from '../../components/Filters/Filters';
import { MarketplacePage } from '../../components/MarketplacePage/MarketplacePage';
import { getDataFilters } from '../../redux/actions/Actions';
import { Card } from "../../components/Card/Card";
import store from '../../redux/store';
import { DataTest } from '../../DataTest';


//const tokenAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2MTM2NDkzLWJjYWQtNDMxMy05OWYzLTI4ZGEwZTVhYTE0MSIsImZpcnN0X25hbWUiOiJKaG9uIiwibGFzdF9uYW1lIjoiRG9lIiwidXNlcm5hbWUiOiJBZG1pbiIsImV0aF9hY2NvdW50IjpudWxsLCJwaG9uZSI6IiszODA5OTk5OTU1NjEiLCJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwiZW1haWxfaXNfdmVyaWZpZWQiOnRydWUsImlzX3VzYV9jaXRpemVuIjpmYWxzZSwicm9sZSI6ImFkbWluIiwiYXZhdGFyX2ZpbGVfaWQiOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9zdGFuNzgvaW1hZ2UvdXBsb2FkL3YxNjM3MjE5MTgwL3Byb3BjaGFpbl9hdmF0YXJzL2ZodnpmOGQ3aHY0eGk4Y3hhanVnLnBuZyIsImNyZWF0ZWRBdCI6IjIwMjEtMTEtMDhUMjA6NDQ6MTcuMDk5WiIsInVwZGF0ZWRBdCI6IjIwMjEtMTEtMjRUMDU6Mjk6MzcuOTkzWiIsImlhdCI6MTYzODQzNTM1NCwiZXhwIjoxNjM4NjA4MTU0fQ.oEcbIEjjrVSYwUV8ZZcwYfQQy9PUFYD_2g8ZoaqTWj0";

function Marketplace(): JSX.Element {
  const dispatch = useDispatch();

  // This dont working!
  // useEffect(() => {
  //   dispatch(getDataFilters("page=1&orderby=description&desc=true&"));
  // }, [])

  const [showFilters, setShowFilters] = useState(false);
  const [queryValues, setQueryValues] = useState();
 
  useEffect(() => {
    dispatch(getDataFilters(queryValues));
  }, [queryValues, showFilters]);

  const cards = useMemo(() => store.getState().data, []);
  const cardsArr = [];

  if (cards.rows) {
    console.log(cards.rows);
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
    <div>
      {showFilters ?
        <Filters showMarket={setShowFilters} setQueryValues={setQueryValues} />
        : <MarketplacePage cardsArr={cardsArr} showFiltersValue={showFilters} showFilters={setShowFilters} />
      }
    </div>
  );
}

export default Marketplace;
