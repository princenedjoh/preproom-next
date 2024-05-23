import Container from "@components/container/container"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import { Dispatch, SetStateAction } from "react"

const Answer = ({
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
            <div className='flex flex-col gap-1'>
                <div className="flex gap-1">
                    <Text
                        bold={TypographyBold.md}
                    >
                        Answer:
                    </Text>
                    <Text>
                        {'A) answer'}
                    </Text>
                </div>
                <div className="flex gap-[1px] flex-wrap">
                    <Text
                        bold={TypographyBold.md}
                    >
                        Explanation:
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    </Text>
                </div>
            </div>
        </Container>
    )
}
export default Answer