import { useState, useCallback, SetStateAction } from 'react';
import { useSelector } from "react-redux";
import { SelectSort } from "../../UI/SelectSort";
import styles from "./MarketplacePage.module.css";
import Pagination from "@mui/material/Pagination";
import filtersButton from "../../img/buttons/filters.svg";
import { MarketplacePageProps } from './MarketplacePage.props';


export const MarketplacePage = ({ ...props }: MarketplacePageProps): JSX.Element => {

    const count = Math.ceil(useSelector((state: any) => state.data.count) / 8);

    const handlerShowFilters = useCallback(() => {
        props.showFilters(true)
    }, [props.showFilters]);

    const handlerClearAll = useCallback(() => {
        props.clearAll()
    }, [props.clearAll]);

    const [page, setPage] = useState(1);

    const handleChangePagination = (event: any, value: SetStateAction<number>) => {
        setPage(value);
        props.setPage(value);
    };

    return (
        <div className={styles.wrapperMarket}>
            <div className={styles.wrapperTop}>
                <div className={styles.title}>Our Listings</div>
                <div className={styles.bottomTitle}>
                    Become the landlord of the future
                </div>
                <div className={styles.wrapperSort}>
                    <div className={styles.sortBy}>
                        <SelectSort setValue={props.setSort} />
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
                <Pagination count={count} page={page} onChange={handleChangePagination} color="primary" />
            </div>
        </div >
    );
};