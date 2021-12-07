import { useCallback } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import styles from "./StylesUI.module.css";

interface SelectFiltersProps 
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setValue: React.Dispatch<React.SetStateAction<number>>,
    value:number
  }

export const SelectFiltersTotalUnits = ({...props}:SelectFiltersProps): JSX.Element => {
    const handleChange = useCallback((event) => {
        props.setValue(event.target.value);
    },[props.setValue]);
    return (
        <div>
            <div className={styles.selectFormFilters}>
                <FormControl fullWidth={true} >
                    <Select
                        className={styles.selectSortFilters}
                        value={props.value}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {(props.value > 0) ? "" : <MenuItem value="" ><div className={styles.selectSortFilters}>0</div></MenuItem>}
                        <MenuItem value={1} ><div className={styles.selectSortFilters}>1</div></MenuItem>
                        <MenuItem value={5} ><div className={styles.selectSortFilters}>5</div></MenuItem>
                        <MenuItem value={10} ><div className={styles.selectSortFilters}>10</div></MenuItem>
                        <MenuItem value={20} ><div className={styles.selectSortFilters}>20</div></MenuItem>
                        <MenuItem value={30} ><div className={styles.selectSortFilters}>30</div></MenuItem>
                        <MenuItem value={40} ><div className={styles.selectSortFilters}>40</div></MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export const SelectFiltersSquare = ({...props}:SelectFiltersProps): JSX.Element => {
    const handleChange = useCallback((event) => {
        props.setValue(event.target.value);
    },[props.setValue]);
    return (
        <div>
            <div className={styles.selectFormFilters}>
                <FormControl fullWidth={true} >
                    <Select
                        className={styles.selectSortFilters}
                        value={props.value}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {(props.value > 0) ? "" : <MenuItem value="" ><div className={styles.selectSortFilters}>0</div></MenuItem>}
                        <MenuItem value={10} ><div className={styles.selectSortFilters}>10</div></MenuItem>
                        <MenuItem value={30} ><div className={styles.selectSortFilters}>30</div></MenuItem>
                        <MenuItem value={50} ><div className={styles.selectSortFilters}>50</div></MenuItem>
                        <MenuItem value={80} ><div className={styles.selectSortFilters}>80</div></MenuItem>
                        <MenuItem value={120} ><div className={styles.selectSortFilters}>120</div></MenuItem>
                        <MenuItem value={150} ><div className={styles.selectSortFilters}>150</div></MenuItem>
                        <MenuItem value={180} ><div className={styles.selectSortFilters}>180</div></MenuItem>
                        <MenuItem value={210} ><div className={styles.selectSortFilters}>210</div></MenuItem>
                        <MenuItem value={250} ><div className={styles.selectSortFilters}>250</div></MenuItem>
                        <MenuItem value={300} ><div className={styles.selectSortFilters}>300</div></MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export const SelectFilters = ({...props}:SelectFiltersProps): JSX.Element => {
    const handleChange = useCallback((event) => {
        props.setValue(event.target.value);
    },[props.setValue]);
    return (
        <div>
            <div className={styles.selectFormFilters}>
                <FormControl fullWidth={true} >
                    <Select
                        className={styles.selectSortFilters}
                        value={props.value}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {(props.value > 0) ? "" : <MenuItem value="" ><div className={styles.selectSortFilters}>0</div></MenuItem>}
                        <MenuItem value={1} ><div className={styles.selectSortFilters}>1</div></MenuItem>
                        <MenuItem value={2} ><div className={styles.selectSortFilters}>2</div></MenuItem>
                        <MenuItem value={3} ><div className={styles.selectSortFilters}>3</div></MenuItem>
                        <MenuItem value={4} ><div className={styles.selectSortFilters}>4</div></MenuItem>
                        <MenuItem value={5} ><div className={styles.selectSortFilters}>5</div></MenuItem>
                        <MenuItem value={6} ><div className={styles.selectSortFilters}>6</div></MenuItem>
                        <MenuItem value={7} ><div className={styles.selectSortFilters}>7</div></MenuItem>
                        <MenuItem value={8} ><div className={styles.selectSortFilters}>8</div></MenuItem>
                        <MenuItem value={9} ><div className={styles.selectSortFilters}>9</div></MenuItem>
                        <MenuItem value={10} ><div className={styles.selectSortFilters}>10</div></MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}