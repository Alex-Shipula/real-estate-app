import { useCallback } from "react";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Box } from "@mui/system";
import Slider from '@mui/material/Slider';


interface RangeSliderFilters 
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setValue: React.Dispatch<React.SetStateAction<[number,number]>>,
    value:number[]
  }

export const  RangeSliderFilters = ({...props}:RangeSliderFilters):JSX.Element => { 
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
