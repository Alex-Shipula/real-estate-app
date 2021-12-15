import { useState, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { SelectSort } from "../../UI/SelectSort";
import styles from "./MarketplacePage.module.css";
import Pagination from "@mui/material/Pagination";
import filtersButton from "../../img/buttons/filters.svg";
import { getDataFiltersToken } from '../../redux/actions/Actions';
import { MarketplacePageProps } from './MarketplacePage.props';
import { Token } from '../../Token';


export const MarketplacePage = ({ ...props }: MarketplacePageProps): JSX.Element => {

    const dispatch = useDispatch();
    const handlerShowFilters = useCallback(() => {
        props.showFilters(true)
    }, [props.showFilters]);

    const [valueSort, setValueSort] = useState("");

    const handlerClearAll = () => {
        dispatch(getDataFiltersToken(Token,"page_size=8&page=1&orderby=description&desc=true"));
    }

    return (
        <div className={styles.wrapperMarket}>
            <div className={styles.wrapperTop}>
                <div className={styles.title}>Our Listings</div>
                <div className={styles.bottomTitle}>
                    Become the landlord of the future
                </div>
                <div className={styles.wrapperSort}>
                    <div className={styles.sortBy}>
                        <SelectSort setValue={setValueSort} value={valueSort} />
                    </div>
                    <div className={styles.wrapperFound}>
                        <div className={styles.founded}>{props.founded} founded</div>
                        <div className={styles.clearFilters} onClick={handlerClearAll}>Clear All Filters</div>
                        <img src={filtersButton} className={styles.filters} onClick={handlerShowFilters}></img>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                {props.cardsArr}
            </div>
            <div className={styles.pagination}>
                <Pagination count={10} color="primary" />
            </div>
        </div >
    );
};