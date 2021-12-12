import { useDispatch } from "react-redux";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import notImage from "../../img/housesTest/noImage.png";
import arrowUp from "../../img/icons/arrowUpMarket.svg";
import forSale from "../../img/forSale.svg";
import { getPropertiesId } from "../../redux/actions/Actions";
import { Token } from "../../Token";


export const Card = ({ ...props }: CardProps): JSX.Element => {

  const dispatch = useDispatch();
  const handlerGetPropertiesId = () => {
    dispatch(getPropertiesId(Token,props.id))
  }
  
  return (
    <Box className={styles.wrapperCard}>
      <Paper elevation={7} className={styles.paper}>
        <NavLink className={styles.wrapperContent} onClick={handlerGetPropertiesId} to={`/market-single-page/${props.id}`}>
          <div className={styles.wrapperImg}>
            <img src={forSale} className={styles.forSale}></img>
            <img src={props.img || notImage} className={styles.img}></img>
          </div>
          <div className={styles.wrapperPrice}>
            <div className={styles.totalPrice}>
              <div className={styles.titlePrice}>Total Price</div>
              <div className={styles.price}>{props.totalPrice} $</div>
            </div>
            <div className={styles.tokenPrice}>
              <div className={styles.titlePrice}>Token Price</div>
              <div className={styles.price}>{props.tokenPrice} $</div>
            </div>
          </div>
          <div className={styles.district}>{props.district}</div>
          <div className={styles.address}>
            {props.address}
          </div>
          <div className={styles.wrapperBottom}>
            <div className={styles.yield}>
              <div className={styles.yieldTop}>
                <img src={arrowUp} className={styles.yieldArrow}></img>
                <div className={styles.yieldPercent}>{props.expectedYield} %</div>
              </div>
              <div className={styles.yieldText}>Expected Yield</div>
            </div>
            <div className={styles.tokenRent}>
              <div className={styles.tokenRentPrice}>{props.rentPerToken} $ / year</div>
              <div className={styles.tokenRentText}>Rent per Token</div>
            </div>
            <div className={styles.tokenRent}>
              <div className={styles.tokenRentPrice}>{props.crossRent} $ / year</div>
              <div className={styles.tokenRentText}>Cross Rent</div>
            </div>
          </div>
        </NavLink>
      </Paper>
    </Box>
  );
};
