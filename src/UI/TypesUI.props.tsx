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
export interface InfoProps {
    assetPrice?: number;
    listingFee?: number;
    initialMain?: number;
    initialRenov?: number;
    propertyManag?: number;
    realtPlatf?: number;
    maintenance?: number;
    propertyTaxes?: number;
    incurance?: number;
    utilities?: string;
}
export interface InfoIconProps {
    textInfo: string;
}