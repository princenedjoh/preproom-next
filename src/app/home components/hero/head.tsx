import Button from "@components/button/button"
import OutlineButton from "@components/button/outlineButton"
import Chip from "@components/chip/chip"
import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"

const Head = () => {
    return (
        <div className="Head w-full lg:w-[600px] px-[15px] flex flex-col gap-2 items-center">
            <Chip>
                <Text>
                    Education
                </Text>
            </Chip>
            <Text
                textColor={theme.colors.main.primary}
                size={TypographySize.xl}
                lineHeight={1.1}
                textAlign="center"
            >
                <Text
                    bold={TypographyBold.lg}
                    textColor={theme.colors.main.primary}
                    size={TypographySize.xl}
                    lineHeight={1.1}
                    textAlign="center"
                >
                    PrepRoom, 
                </Text>
                Your ultimate exam preparation companion
            </Text>
            <Text
                textAlign="center"
            >
                Welcome to preproom, the go-to app for students seeking to ace their exams and excel in their studies! Whether you’re preparing for a test, quiz or a crucial exam our app provides a comprehensive platform to enhance your learning experience
            </Text>
            <div className='flex gap-2 lg:mt-[5px]'>
                <Button>
                    Solve Problems
                </Button>
                <OutlineButton>
                    Take a Test
                </OutlineButton>
            </div>
        </div>
    )
}
export default Head