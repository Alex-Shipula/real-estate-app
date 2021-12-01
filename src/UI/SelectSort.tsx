import { useCallback } from 'react';
import { DetailedHTMLProps, HTMLAttributes } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./StylesUI.module.css";

interface SelectSortProps 
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value:string
  }

export const SelectSort = ({ ...props }:SelectSortProps): JSX.Element => {

  const handleChange = useCallback((event) => {
    props.setValue(event.target.value)
  }, [props.setValue]);

  return (
    <div>
      <div className={styles.selectForm}>
        <FormControl fullWidth={true}>
          <Select
            className={styles.selectSort}
            value={props.value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {(props.value.length > 0) ? "" : <MenuItem value="" ><em className={styles.selectSort}>Sort by</em></MenuItem>}
            <MenuItem value="popul"><div className={styles.selectSort}>Popularity</div></MenuItem>
            <MenuItem value="latest" ><div className={styles.selectSort}>Latest</div></MenuItem>
            <MenuItem value="lowPrice" ><div className={styles.selectSort}>Price: lowt to hight</div></MenuItem>
            <MenuItem value="higPrice" ><div className={styles.selectSort}>Price: hight to lowt</div></MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}