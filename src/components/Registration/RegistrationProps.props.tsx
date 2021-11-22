import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RegistrationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    step: React.Dispatch<React.SetStateAction<number>>;
  }