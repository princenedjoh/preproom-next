import Button from "@components/button/button"
import Container from "@components/container/container"
import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import Title from "../title"

const Personalize = () => {
    return (
        <div className="Personalize px-[15px]">
            <div className="flex gap-5 w-full flex-wrap lg:w-minimumWidth justify-between">
                <div className='flex flex-col gap-2 items-center lg:items-start'>
                    <div className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-start">
                        <Title>
                            Personalize Your Study Sessions Today!
                        </Title>
                        <Text>
                            Customize your study sessions by selecting specific topics and difficulty levels
                        </Text>
                    </div>
                    <div className='flex flex-col items-center gap-2'>
                        <div className="w-[200px] h-[200px] rounded-full bg-theme-colors-main-bg">

                        </div>
                        <Button>
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="w-full relative lg:w-[400px] flex flex-col gap-4 lg:items-end">
                    {
                        [1,2,3,4].map((item, index : number) => (
                            <div 
                                className={`w-full lg:w-[80%] relative ${index % 2 === 1 ? 'lg:right-[110px]' : 'lg:left-0'} p-[10px] rounded-lg border-[1px] border-solid border-theme-colors-main-primary `}
                                key={index}
                            >
                                <div className="flex gap-2 items-center">
                                    <div className="w-[50px] h-[50px] rounded-full bg-theme-colors-main-bg">

                                    </div>
                                    <div className="flex flex-col flex-1 gap-2">
                                        <Text>
                                            Efficient Education
                                        </Text>
                                        <Text>
                                            We ensure focused and efficient preparation that aligns with your individual needs
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Personalize