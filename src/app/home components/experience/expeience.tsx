import Text from "@styles/components/text"
import Title from "../title"
import theme from "@styles/theme"
import { TypographyBold, TypographySize } from "@styles/style.types"
import { GiPowerLightning } from "react-icons/gi"
import { experience } from "./experiences"
import { hexOpacity } from "@/utils/hexOpacity"

const Experience = () => {
    return (
        <div className='Study px-[15px]'>
            <div className="flex flex-wrap text-center lg:text-start flex-col justify-center items-center lg:justify-between w-full lg:w-minimumWidth gap-8">
                <div className='flex flex-col gap-1 items-center'>
                    <div className="w-[50px] h-[50px] bg-theme-colors-main-bg rounded-full flex justify-center items-center">
                        <GiPowerLightning 
                            color={theme.colors.main.primary}
                            size={25}
                        />
                    </div>
                    <Title>
                        Experience the power of PrepRoom
                    </Title>
                </div>
                <div className='flex gap-5 lg:gap-[80px] flex-wrap'>
                    {
                        experience.map((item, index : number) => (
                            <div
                                key={index}
                                className="flex flex-col gap-2 items-center w-full lg:w-[200px]"
                            >
                                <div className="w-[60px] h-[60px] rounded-full flex justify-center items-center"
                                    style={{
                                        backgroundColor : `${item.color}${hexOpacity(20)}`
                                    }}
                                >
                                    <item.icon 
                                        color={item.color}
                                    />
                                </div>
                                <div className='flex flex-col gap-1 items-center'>
                                    <Text 
                                        textAlign="center"
                                        textColor={item.color}
                                        size={TypographySize.md}
                                        bold={TypographyBold.md}
                                    >
                                        {item.title}
                                    </Text>
                                    <Text textAlign="center">
                                        Leverage detailed insights to focus your efforts on areas that need improvements
                                    </Text>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Experience