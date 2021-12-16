import { useCallback,useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./StylesUI.module.css";
import { SelectSortProps } from './TypesUI.props';


export const SelectSort = ({ ...props }: SelectSortProps): JSX.Element => {

  const [value, setValueSort] = useState("");

  const handleChange = useCallback((event) => {
    setValueSort(event.target.value);
    props.setValue(event.target.value);
  }, [props.setValue]);

  return (
    <div>
      <div className={styles.selectForm}>
        <FormControl fullWidth={true}>
          <Select
            className={styles.selectSort}
            value={value}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {(value.length > 0) ? "" : <MenuItem value=""><div className={styles.selectSort}>Sort by</div></MenuItem>}
            <MenuItem value="&orderby=units&desc=true"><div className={styles.selectSort}>Popularity</div></MenuItem>
            <MenuItem value="&orderby=units"><div className={styles.selectSort}>Latest</div></MenuItem>
            <MenuItem value="&orderby=total_price"><div className={styles.selectSort}>Price: lowt to hight</div></MenuItem>
            <MenuItem value="&orderby=total_price&desc=true"><div className={styles.selectSort}>Price: hight to lowt</div></MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}