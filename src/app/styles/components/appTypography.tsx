'use client'
import { AppTypographyProps, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { useState } from "react"

const AppTypography = ({
    children,
    className,
    bold,
    size,
    textColor,
    wrap,
    underline,
    clickable,
    clickableLink,
    italic,
    textAlign,
    display,
    ellipsis,
    fontfamily,
    maxLines,
    lineHeight,
} : AppTypographyProps) => {

    const [onHover, setOnHover] = useState<boolean>(false)

    return (
        <span
            className={className}
            style={{
                fontWeight : bold,
                fontFamily : fontfamily,
                fontSize : size ?? TypographySize.sm,
                color : onHover && clickableLink 
                        ? 'blue'
                        : textColor
                        ? textColor
                        : theme.colors.main.text.body,
                flexWrap : wrap ? 'wrap' : 'nowrap',
                textDecoration : underline || (onHover && clickableLink) ? 'underline' : 'none',
                opacity : onHover && clickable ? 0.7 : 1,
                fontStyle : italic ? 'italic' : 'normal',
                textAlign,
                display: display ? display : ellipsis ? '-webkit-box' : undefined,
                textOverflow : ellipsis ? 'ellipsis' : 'none',
                maxHeight : ellipsis ? 13.33 * 1.5 * (maxLines ?? 1) : 'none',
                overflow : 'hidden',
                width : 'fit-content',
                lineHeight
            }}
            onMouseOver={()=>setOnHover(true)}
            onMouseLeave={()=>setOnHover(false)}
        >
            {children}
        </span>
    )
}

export const Head1 = (props : AppTypographyProps) => {
    return (
        <AppTypography
            size={TypographySize.xxl}
            textColor={theme.colors.main.text.head}
            lineHeight={1.3}
            {...props}
        >
            {props.children}
        </AppTypography>
    )
}

export default AppTypography