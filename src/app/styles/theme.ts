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
        11 : '#f7f7f7',
        12 : '#FAFAFB'
    },

    blue : {
        blue1 : "#041957",
        blue2 : "#1D3B95",
        blue3 : "#4169E1",
        blue4 : "#ACC1FF",
        blue5 : "#DDE6FF",
        blue6 : "#EBF0FF",
        blue7 : "#F5F7FF",
        blue8 : "#FAFBFF",
        blue9 : "#F4F5F9",
    },

    green : {
        green1 : "#005200",
        green2 : "#029202",
        green3 : "#6BC36B",
        green4 : "#ABE8AB",
        green5 : "#DFF4DF",
    },

    red : {
        red1 : "#730404",
        red2 : "#A70000",
        red3 : "#E45353",
        red4 : "#F0A0A0",
        red5 : "#FFDCDC",
    },

    orange : {
        orange1 : "#77410E",
        orange2 : "#B66F1D",
        orange3 : "#EEAB46",
        orange4 : "#FFCBA6",
        orange5 : "#FFEBD9",
    },

    violet : {
        violet1 : "#4B1166",
        violet2 : "#8523B2",
        violet3 : "#B946EE",
        violet4 : "#DCACF2",
        violet5 : "#EEE0F5",
    },
}

const theme = {
    colors : {
        main : {
            primary : "#9772AE",
            shadow : `#9772AE${hexOpacity(15)}`,
            shadowLight : `#9772AE${hexOpacity(8)}`,
            borderColor : colors.dark[9],
            borderColorLight : colors.dark[10],
            bg : colors.dark[11],
            bg2 : colors.dark[10],
            allColors : colors,
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