import theme from "@styles/theme"
import Button from "./button"
import { ButtonProps } from "@/utils/@types"

const OutlineButton = (props: ButtonProps) => {
    return <Button 
        background="none"
        color={theme.colors.main.primary}
        hover={{
            background : `${theme.colors.main.button.primary}33`,
            opacity : 1
        }}
        {...props}
    >
        {props.children}
    </Button>
}

export default OutlineButton