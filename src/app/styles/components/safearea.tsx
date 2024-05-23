import { colors } from "@styles/theme"
import Flex from "./flex"
import { safeareaProps } from "@/utils/@types"
import { minimumwidth, standardMargin } from "@/utils/constants"

const Safearea = ({
    children,
    width,
    background,
    defaultBackground,
    padding
} : safeareaProps) => {
    return (
        <Flex
            padding={padding ?? "80px 10px"}
            direction="column"
            align="center"
            background={defaultBackground ? `${colors.dark[2]}33` : background}
            className="SafeArea"
        >
            <div 
                className={`SafeArea-container w-full ${width ? `md:w-[${width}]` : `md:w-minimumWidth`}`}>
                {children}
            </div>
        </Flex>
    )
}

export default Safearea