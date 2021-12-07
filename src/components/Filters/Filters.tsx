import { useState, useCallback, useEffect } from 'react';
import { Divider, OutlinedInput, Paper } from "@mui/material";
import { Box } from "@mui/system";
import FormControl from '@mui/material/FormControl';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./Filters.module.css";
import applyButton from "../../img/buttons/applyButton.svg";
import { RangeSliderFilters } from '../../UI/RangeSliderFilter';
import { SelectFilters,SelectFiltersSquare,SelectFiltersTotalUnits } from '../../UI/SelectFilters';
import { FiltersProps } from './Filters.props';


export const Filters = ({ ...props }: FiltersProps): JSX.Element => {

    const handlerShowMarket = useCallback(() => {
        props.showMarket(false)
    }, [props.showMarket]);
   
    const [queryParam ,setQueryParam] = useState('');
    const [valueSlider, setValueSlider] = useState([0, 100]);

    const [BedroomsFrom, setBedroomsFrom] = useState(0);
    const [BedroomsTo, setBedroomsTo] = useState(0);

    const [BathsFrom, setBathsFrom] = useState(0);
    const [BathsTo, setBathsTo] = useState(0);

    const [TotalUnitsFrom, setTotalUnitsFrom] = useState(0);
    const [TotalUnitsTo, setTotalUnitsTo] = useState(0);

    const [SquareFeetFrom, setSquareFeetFrom] = useState(0);
    const [SquareFeetTo, setSquareFeetTo] = useState(0);

    useEffect(() => {
        setQueryParam(`page=1&orderby=description&desc=true&${(BedroomsFrom === 0) ? "" : `bedroom_from=${BedroomsFrom}`}${(BedroomsTo === 0) ? "" : `&bedroom_to=${BedroomsTo}`}${(BathsFrom === 0) ? "" : `&bath_from=${BathsFrom}`}${(BathsTo === 0) ? "" : `&bath_to=${BathsTo}`}${(TotalUnitsFrom === 0) ? "" : `&units_from=${TotalUnitsFrom}`}${(TotalUnitsTo === 0) ? "" : `&units_to=${TotalUnitsTo}`}${(SquareFeetFrom === 0) ? "" : `&square_from=${SquareFeetFrom}`}${(SquareFeetTo === 0) ? "" : `&square_to=${SquareFeetTo}`}`)
    },[BedroomsFrom,BedroomsTo,BathsFrom,BathsTo,TotalUnitsFrom,TotalUnitsTo,SquareFeetFrom,SquareFeetTo]);

    const handlerQueryValues = () => {
        props.setQueryValues(queryParam)
        handlerShowMarket()
    };

    const handlerClearAll = () => {
        setValueSlider([0, 100]);
        setBedroomsFrom(0);
        setBedroomsTo(0);
        setBathsFrom(0);
        setBathsTo(0);
        setTotalUnitsFrom(0);
        setTotalUnitsTo(0);
        setSquareFeetFrom(0);
        setSquareFeetTo(0);
    }

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
                        <RangeSliderFilters setValue={setValueSlider} value={valueSlider} />
                    </div>
                    <div className={styles.wrapperBlockTop}>
                        <div className={styles.wrapperLeftTop}>
                            <div className={styles.blockTitle}>Min. price</div>
                            <div className={styles.blockTopLeft}>
                                <FormControl sx={{ m: 1, width: "17ch" }} variant="outlined">
                                    <OutlinedInput
                                        value={`$${valueSlider[0] * 1000}`}
                                    /> </FormControl>
                            </div>
                        </div>
                        <div className={styles.wrapperRightTop}>
                            <div className={styles.blockTitle}>Max. price</div>
                            <div className={styles.blockTopRight}>
                                <FormControl sx={{ m: 1, width: "17ch" }} variant="outlined">
                                    <OutlinedInput
                                        value={`$${valueSlider[1] * 2000}`}
                                    /> </FormControl>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Bedrooms</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFilters setValue={setBedroomsFrom} value={BedroomsFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFilters setValue={setBedroomsTo} value={BedroomsTo} /></div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Baths</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFilters setValue={setBathsFrom} value={BathsFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFilters setValue={setBathsTo} value={BathsTo} /></div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Total Units</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFiltersTotalUnits setValue={setTotalUnitsFrom} value={TotalUnitsFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFiltersTotalUnits setValue={setTotalUnitsTo} value={TotalUnitsTo} /></div>
                        </div>
                    </div>
                    <Divider />
                    <div className={styles.titleFilters}>Square Feet</div>
                    <div className={styles.wrapperBlock}>
                        <div className={styles.wrapperLeft}>
                            <div className={styles.blockTitle}>From</div>
                            <div className={styles.block}><SelectFiltersSquare setValue={setSquareFeetFrom} value={SquareFeetFrom} /></div>
                        </div>
                        <div className={styles.wrapperRight}>
                            <div className={styles.blockTitle}>To</div>
                            <div className={styles.block}><SelectFiltersSquare setValue={setSquareFeetTo} value={SquareFeetTo} /></div>
                        </div>
                    </div>

                    <div className={styles.wrapperBottom}>
                        <div className={styles.clearAll} onClick={handlerClearAll}>Clear all</div>
                        <img src={applyButton} className={styles.apply} onClick={handlerQueryValues}></img>
                    </div>
                </div>
            </Paper>
        </Box>
    );
};