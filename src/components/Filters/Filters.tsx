import { useCallback } from 'react';
import { Divider, OutlinedInput, Paper } from "@mui/material";
import { Box } from "@mui/system";
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Filters.module.css";
import applyButton from "../../img/buttons/applyButton.svg";
import { RangeSliderFilters } from '../../UI/RangeSliderFilter';
import { SelectFilters, SelectFiltersSquare, SelectFiltersTotalUnits } from '../../UI/SelectFilters';
import { FiltersProps } from './Filters.props';


export const Filters = ({ ...props }: FiltersProps): JSX.Element => {

    const handlerShowMarket = useCallback(() => {
        props.showMarket(false)
    }, [props.showMarket]);

    const handlerClearAll = useCallback(() => {
        props.clearAll()
    }, [props.clearAll]);

    return (
        <Box className={styles.wrapperFilters}>
            <Paper className={styles.paper}>
                <div className={styles.wrapperContent}>
                    <div className={styles.wrapperTop}>
                        <div className={styles.title}>Filters</div>
                        <CloseIcon className={styles.close} onClick={handlerShowMarket} />
                    </div>
                    <div className={styles.titleFilters}>Price Range</div>
                    <div className={styles.wrapperSlider}>
                        <RangeSliderFilters setValue={props.setValueSlider} value={props.valueSlider} />
                    </div>
                    <div className={styles.wrapperBlockTop}>
                        <div className={styles.wrapperLeftTop}>
                            <div className={styles.blockTitle}>Min. price</div>
                            <div className={styles.blockTopLeft}>
                                <FormControl sx={{ m: 1, width: "17ch" }} variant="outlined">
                                    <OutlinedInput
                                        value={`$${props.valueSlider[0] * 1000}`}
                                    /> </FormControl>
                            </div>
                        </div>
                        <div className={styles.wrapperRightTop}>
                            <div className={styles.blockTitle}>Max. price</div>
                            <div className={styles.blockTopRight}>
                                <FormControl sx={{ m: 1, width: "17ch" }} variant="outlined">
                                    <OutlinedInput
                                        value={`$${props.valueSlider[1] * 10000}`}
                                    /> </FormControl>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Bedrooms</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFilters setValue={props.setBedroomsFrom} value={props.bedroomsFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFilters setValue={props.setBedroomsTo} value={props.bedroomsTo} /></div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Baths</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFilters setValue={props.setBathsFrom} value={props.bathsFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFilters setValue={props.setBathsTo} value={props.bathsTo} /></div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Total Units</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFiltersTotalUnits setValue={props.setTotalUnitsFrom} value={props.totalUnitsFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFiltersTotalUnits setValue={props.setTotalUnitsTo} value={props.totalUnitsTo} /></div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Square Feet</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFiltersSquare setValue={props.setSquareFeetFrom} value={props.squareFeetFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFiltersSquare setValue={props.setSquareFeetTo} value={props.squareFeetTo} /></div>
                        </div>
                    </div>

                    <div className={styles.wrapperBottom}>
                        <div className={styles.clearAll} onClick={handlerClearAll}>Clear all</div>
                        <img src={applyButton} className={styles.apply} onClick={handlerShowMarket}></img>
                    </div>
                </div>
            </Paper>
        </Box>
    );
};