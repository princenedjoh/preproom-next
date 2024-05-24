import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { baseProps } from "../utils/@types"

const Title = ({
    children,
    className
} : baseProps) => {
    return (
        <Text
            bold={TypographyBold.md}
            textColor={theme.colors.main.primary}
            size={TypographySize.lg2}
            lineHeight={1.1}
            className={className}
        >
            {children}
        </Text>
    )
}
export default Title