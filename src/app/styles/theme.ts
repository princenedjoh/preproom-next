import { hexOpacity } from "../utils/hexOpacity"
import { TypographyBold, TypographySize } from "./style.types"

export const colors = {
    dark : {
        1 : '#1A1A1A',
        2 : '#282828',
        3 : '#393939',
        4 : '#4D4D4D',
        5 : '#666666',
        6 : '#818181',
        7 : '#A2A2A2',
        8 : '#cccccc',
        9 : "#e6e6e6",
        10 : '#F0F0F0',
        11 : '#f7f7f7'
    },
}

const theme = {
    colors : {
        main : {
            primary : "#9772AE",
            shadow : `#9772AE${hexOpacity(15)}`,
            shadowLight : `#9772AE${hexOpacity(8)}`,
            borderColor : colors.dark[9],
            bg : colors.dark[11],
            bg2 : colors.dark[10],
            text : {
                head : colors.dark[2],
                body : colors.dark[5],
                light : colors.dark[6],
                extralight : colors.dark[8]
            },
            button : {
                primary : "#9772AE"
            }
        },
    },

    typography: {
        size: { xs: TypographySize.xs, sm: TypographySize.sm, sm2: TypographySize.sm2, md: TypographySize.md, 
            md2 : TypographySize.md2, lg: TypographySize.lg, lg2 : TypographySize.lg,
            xl: TypographySize.xl, xxl: TypographySize.xxl, xl3: TypographySize.xl3 },
        bold: { sm: TypographyBold.sm, md: TypographyBold.md, lg: TypographyBold.lg },
      },

    spacing: {
        xs: "6px",
        sm: "12px",
        md: "18px",
        lg: "30px",
    },

    borderRadius: {
        sm: "5px",
        md: "10px",
        lg: "20px",
    },

    breakpoints: {
        xs: "600px",
        sm: "800px",
        md: "1000px",
        lg: "1200px",
        xl: "1400px",
    },
}

export default theme