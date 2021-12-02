import { useState, useCallback } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Card } from "../../components/Card/Card";
import { SelectSort } from "../../UI/SelectSort";
import styles from "./MarketplacePage.module.css";
import Pagination from "@mui/material/Pagination";
import filtersButton from "../../img/buttons/filters.svg";
import store from '../../redux/store';
import { DataTest } from '../../DataTest';


interface MarketplacePageProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    showFilters: React.Dispatch<React.SetStateAction<boolean>>,
}

export const MarketplacePage = ({ ...props }: MarketplacePageProps): JSX.Element => {

    const handlerShowFilters = useCallback(() => {
        props.showFilters(true)
    }, [props.showFilters]);

    const [valueSort, setValueSort] = useState("");
    const cards = store.getState();
    const cardsArr = [];
    for (const key in cards.data) {
        cardsArr.push(
            <Card
                id={cards.data[key].id}
                forSale={true}
                img={"house_1.png"}
                totalPrice={cards.data[key].total_tokens || 1000}
                tokenPrice={cards.data[key].token_price || 0}
                district={cards.data[key].neighborhood || <div>No district</div>}
                address={cards.data[key].address || <div>No address</div>}
                expectedYield={12.03}
                rentPerToken={6.2}
                crossRent={80.0}
            />
        )
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
                        <div className={styles.founded}>123 founded</div>
                        <div className={styles.clearFilters}>Clear All Filters</div>
                        <img src={filtersButton} className={styles.filters} onClick={handlerShowFilters}></img>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
               {cardsArr}
            </div>
            <div className={styles.pagination}>
                <Pagination count={10} color="primary" />
            </div>
        </div >
    );
};