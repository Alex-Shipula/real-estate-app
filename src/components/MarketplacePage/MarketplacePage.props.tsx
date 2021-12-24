import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MarketplacePageProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    showFilters: React.Dispatch<React.SetStateAction<boolean>>,
    showFiltersValue: boolean,
    cardsArr: any[],
    founded: number,
    clearAll: () => void,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    setSort: React.Dispatch<React.SetStateAction<string>>
}
