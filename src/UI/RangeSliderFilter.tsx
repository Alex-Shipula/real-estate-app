import { useCallback } from "react";
import { Box } from "@mui/system";
import Slider from '@mui/material/Slider';
import { RangeSliderFiltersProps } from "./TypesUI.props";


export const  RangeSliderFilters = ({...props}:RangeSliderFiltersProps):JSX.Element => { 
    const handleChange = useCallback((event, newValue) => {
        props.setValue(newValue);
    },[props.setValue]);
    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={props.value}
                onChange={handleChange}
            />
        </Box>
    );
}
