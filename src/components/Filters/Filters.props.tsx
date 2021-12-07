import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FiltersProps
extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
showMarket: React.Dispatch<React.SetStateAction<boolean>>,
setQueryValues:React.Dispatch<React.SetStateAction<string>>
}