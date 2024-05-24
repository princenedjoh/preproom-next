import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { PiExamFill } from "react-icons/pi"

const Hero = () => {
    return (
        <div className="w-full px-[15px] flex justify-center mt-[-130px] items-center h-[300px] bg-theme-colors-main-shadowLight border-b-[1px] border-solid border-theme-colors-main-borderColor">
            <div className="flex w-full lg:w-minimumWidth justify-center items-center ">
                <div className='flex flex-col gap-1 items-center'>
                    <PiExamFill 
                        size={30}
                        color={theme.colors.main.primary}
                    />
                    <Text
                        size={TypographySize.lg}
                        bold={TypographyBold.md}
                        textColor={theme.colors.main.primary}
                    >
                        Take a Test
                    </Text>
                </div>
            </div>
        </div>
    )
}
export default Hero