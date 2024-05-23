import { ReactNode } from "react";

export enum TypographySize {
  xs2 = "7px",
  xs = "10px",
  sm = "12px",
  sm2 = "14px",
  md = "15px",
  md2 = "16px",
  lg = "20px",
  lg2 = "25px",
  xl = "30px",
  xxl = "35px",
  xl3 = "40px"
}

export interface AppTypographyProps {
  children? : ReactNode
  className? : string
  fontfamily? : string
  bold?: TypographyBold;
  size?: TypographySize;
  textColor?: string;
  colorTheme? : string;
  wrap?: string;
  underline?: boolean
  clickable?: boolean
  clickableLink?: boolean
  italic?: boolean
  textAlign? : "center" | "end" | "left" | "right" | "start"
  display? : string
  ellipsis? : boolean
  maxLines? : number
  lineHeight? : number
}

export interface buttonProps {
  width : string,
  backgroundColor : string,
}

export enum TypographyBold {
  sm = "400",
  md = "600",
  lg = "800",
}

export interface hrProps {
  size? : {
    width? : string,
    height? : string,
  },
  background? : string,
  margin? : string,
  padding? : string
}

export interface clickableProps {
  cursor? : string
  radius? : string
  padding? : string
  margin? : string
}