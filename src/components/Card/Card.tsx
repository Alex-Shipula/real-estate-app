import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import house_1 from "../../img/housesTest/house_1.png";
import arrowUp from "../../img/icons/arrowUpMarket.svg";
import forSale from "../../img/forSale.svg";


export const Card = ({ ...props }: CardProps): JSX.Element => {

  return (
    <Box className={styles.wrapperCard}>
      <Paper elevation={7} className={styles.paper}>
        <div className={styles.wrapperContent}>
          <div className={styles.wrapperImg}>
            <img src={forSale} className={styles.forSale}></img>
            <img src={house_1} className={styles.img}></img>
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
                <div className={styles.yieldPercent}>{12.03}%</div>
              </div>
              <div className={styles.yieldText}>Expected Yield</div>
            </div>
            <div className={styles.tokenRent}>
              <div className={styles.tokenRentPrice}>{6.2} $ / year</div>
              <div className={styles.tokenRentText}>Rent per Token</div>
            </div>
            <div className={styles.tokenRent}>
              <div className={styles.tokenRentPrice}>{80.0} $ / year</div>
              <div className={styles.tokenRentText}>Cross Rent</div>
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  );
};
