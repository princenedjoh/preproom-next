import { alphabet } from "@/app/utils/constants"
import ClickableTab from "@components/clickable/clickabletab"
import Container from "@components/container/container"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import { Dispatch, SetStateAction } from "react"
import { FaCaretRight } from "react-icons/fa6"
import { IoHelpCircleSharp } from "react-icons/io5"

const MainQuestion = ({
    showAnswer,
    setShowAnswer
} : {
    showAnswer : boolean,
    setShowAnswer : Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Container
            className="!p-[15px] !bg-white !W-full"
        >
            <div className="flex w-full justify-between gap-2">
                <div className="flex flex-col gap-3">
                    <Text
                        bold={TypographyBold.md}
                    >
                        Question here
                    </Text>
                    <div className="flex flex-col gap-2">
                        {
                            [1,2,3,4].map((answer, index : number) => (
                                <div 
                                    className="flex gap-2"
                                    key={index}
                                >
                                    <Text
                                        bold={TypographyBold.sm2}
                                    >
                                        {alphabet[index].toUpperCase()}{')'}
                                    </Text>
                                    <Text>
                                        answer {index + 1}
                                    </Text>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col h-full justify-between items-end">
                    <ClickableTab>
                        <IoHelpCircleSharp 
                            size={25}
                            color={theme.colors.main.primary}
                        />
                    </ClickableTab>
                    <ClickableTab
                        onClick={()=>setShowAnswer(!showAnswer)}
                    >
                        <div className="flex gap-2 items-center">
                            <Text
                                textColor={theme.colors.main.text.light}
                            >
                                Show Answer
                            </Text>
                            <FaCaretRight
                                color={theme.colors.main.text.extralight}
                                className={`${showAnswer ? 'rotate-90' : 'rotate-0'} duration-200`}
                                size={12}
                            />
                        </div>
                    </ClickableTab>
                </div>
            </div>
        </Container>
    )
}
export default MainQuestion