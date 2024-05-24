import Button from "@components/button/button"
import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { FaCheckCircle } from "react-icons/fa"
import Title from "../title"

const Study = () => {
    return (
        <div className='Study px-[15px]'>
            <div className="flex flex-wrap justify-center items-center lg:justify-between w-full lg:w-minimumWidth gap-2">
                <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-start ">
                    <Title>
                        Steady smarter not Harder!
                    </Title>
                    <Text>
                        Leverage our intelligent study tools to optimize your learning and retain information
                    </Text>
                    <div className="flex flex-col gap-2">
                        {
                            [1,2,3].map((item, index : number) => (
                                <div
                                    key={index}
                                    className="flex gap-2"
                                >
                                    <FaCheckCircle 
                                        color={theme.colors.main.primary}
                                    />
                                    <Text>
                                        Conquer exams together
                                    </Text>
                                </div>
                            ))
                        }
                    </div>
                    <Button>
                        Get Started
                    </Button>
                </div>
                <div className="w-[200px] h-[200px] rounded-full bg-theme-colors-main-bg">

                </div>
            </div>
        </div>
    )
}
export default Study