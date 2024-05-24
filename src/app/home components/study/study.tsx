import Button from "@components/button/button"
import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { FaCheckCircle } from "react-icons/fa"
import Title from "../title"
import Chip from "@components/chip/chip"

const Study = () => {

    const data = [
        'Conquer exams together',
        'Engage with vibrant community of students',
        'Share study resources and collaborate on challenging questions'
    ]

    return (
        <div className='Study px-[15px]'>
            <div className="flex flex-wrap-reverse justify-center items-center lg:justify-between w-full lg:w-minimumWidth gap-2">
                <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-start ">
                    <Title>
                        Steady smarter not Harder!
                    </Title>
                    <Text>
                        Leverage our intelligent study tools to optimize your learning and retain information
                    </Text>
                    <div className="flex flex-col gap-2 items-center lg:items-start">
                        {
                            data.map((item, index : number) => (
                                <Chip
                                    key={index}
                                    className="!bg-theme-colors-main-shadowLight"
                                >
                                    <div
                                        className="flex gap-2 items-center"
                                    >
                                        <FaCheckCircle 
                                            color={theme.colors.main.primary}
                                        />
                                        <Text 
                                            textAlign='left'
                                            textColor={theme.colors.main.primary} 
                                            bold={TypographyBold.sm2}   
                                        >
                                            {item}
                                        </Text>
                                    </div>
                                </Chip>
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