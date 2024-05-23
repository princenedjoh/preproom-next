import Container from "@components/container/container"
import Text from "@styles/components/text"
import Question from "./question"

const QuestionList = () => {
    return (
        <div className="w-full px-[15px] lg:px-0 flex flex-col gap-2 ">
            {
                [1,2,3,4,5,6,7,8,9,0].map((question, index : number) => (
                    <Question 
                        key={index}
                    />
                ))
            }
        </div>
    )
}
export default QuestionList