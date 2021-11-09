import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AccountMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    logOut: React.Dispatch<React.SetStateAction<boolean>>;
  }
