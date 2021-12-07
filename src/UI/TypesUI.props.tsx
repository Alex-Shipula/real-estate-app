import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RangeSliderFiltersProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setValue: React.Dispatch<React.SetStateAction<[number, number]>>,
    value: number[]
}
export interface SelectFiltersProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setValue: React.Dispatch<React.SetStateAction<number>>,
    value: number
}
export interface SelectSortProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string
}