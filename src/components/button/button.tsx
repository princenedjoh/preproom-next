'use client'
import theme, { colors } from "@styles/theme";
import { ButtonProps } from "@/utils/@types";
import AppTypography from "@styles/components/appTypography";
import { useState } from "react";
import Flex from "@styles/components/flex";
import { TypographyBold } from "@styles/style.types";

const Button = ({
  className,
  children,
  id,
  color,
  colorTheme,
  background,
  border,
  type,
  PreIcon,
  PostIcon,
  onClick,
  radius,
  maxWidth,
  size,
  textSize,
  textBold,
  padding,
  shadow,
  Loader,
  opacity,
  disabled,
  showLoader,
  variant,
  disableElevation,
  hover
}: ButtonProps) => {

  const [onHover, setOnHover] = useState<boolean>(false)
  const [onPress, setOnPress] = useState<boolean>(false)

  return (
    <button
      style={{
        background : onHover && hover?.background 
                      ? hover?.background 
                      : background
                      ?? theme.colors.main.button.primary,
        padding : padding ?? '7px 15px',
        border : border ?? `1px solid ${theme.colors.main.button.primary}`,
        borderRadius : radius ? `${radius}px` : '100px',
        maxWidth,
        width : size?.width ?? 'fit-content',
        height : size?.height,
        opacity : onHover ? hover?.opacity ?? 0.9 : 1,
        transform : `scale(${onPress ? 0.97 : 1})`,
      }}
      onClick={onClick}
      onMouseOver={()=>setOnHover(true)}
      onMouseLeave={()=>setOnHover(false)}
      onMouseDown={()=>setOnPress(true)}
      onMouseUp={()=>setOnPress(false)}
      className={`hover:animate-pulse ${className} duration-200`}
    >
      <div className="w-full justify-center items-center flex gap-[8px] ">
        <AppTypography
          size={textSize}
          bold={textBold ?? TypographyBold.md}
          textColor={
            onHover && hover?.color
              ? hover.color
              : color
              ?? 'white'
          }
        >
          {children}
        </AppTypography>
      </div>
    </button>
  )
}

type customPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export default Button