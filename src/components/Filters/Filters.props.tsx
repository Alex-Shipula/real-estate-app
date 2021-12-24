import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FiltersProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    showMarket: React.Dispatch<React.SetStateAction<boolean>>,
    clearAll:() => void,
    valueSlider: number[],
    setValueSlider: React.Dispatch<React.SetStateAction<number[]>>,
    bedroomsFrom: number,
    bedroomsTo: number,
    setBedroomsFrom: React.Dispatch<React.SetStateAction<number>>,
    setBedroomsTo: React.Dispatch<React.SetStateAction<number>>,
    bathsFrom: number,
    bathsTo: number,
    setBathsFrom:React.Dispatch<React.SetStateAction<number>>,
    setBathsTo:React.Dispatch<React.SetStateAction<number>>,
    totalUnitsFrom: number,
    totalUnitsTo: number,
    setTotalUnitsFrom:React.Dispatch<React.SetStateAction<number>>,
    setTotalUnitsTo:React.Dispatch<React.SetStateAction<number>>,
    squareFeetFrom:number,
    squareFeetTo:number,
    setSquareFeetFrom:React.Dispatch<React.SetStateAction<number>>,
    setSquareFeetTo:React.Dispatch<React.SetStateAction<number>>
}