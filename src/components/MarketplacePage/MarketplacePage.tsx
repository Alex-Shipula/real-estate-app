import { useState, useCallback } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useDispatch } from "react-redux";
import { SelectSort } from "../../UI/SelectSort";
import styles from "./MarketplacePage.module.css";
import Pagination from "@mui/material/Pagination";
import filtersButton from "../../img/buttons/filters.svg";
import { getDataFilters } from '../../redux/actions/Actions';


interface MarketplacePageProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    showFilters: React.Dispatch<React.SetStateAction<boolean>>,
    showFiltersValue: boolean,
    cardsArr:any[],
    founded:number
}


export const MarketplacePage = ({ ...props }: MarketplacePageProps): JSX.Element => {

    const dispatch = useDispatch();
    const handlerShowFilters = useCallback(() => {
        props.showFilters(true)
    }, [props.showFilters]);

    const [valueSort, setValueSort] = useState("");

    const handlerClearAll = () => {
        dispatch(getDataFilters("page=1&orderby=description&desc=true&"));
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