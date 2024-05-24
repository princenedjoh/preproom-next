import theme from "@styles/theme"
import Card from "./card"
import { MdQuestionAnswer, MdQuiz } from "react-icons/md"
import { GiPapers } from "react-icons/gi"

const Cards = () => {

    const content = [
        {
            title : 'MCQS',
            description : 'Solve multiple choice questions',
            CTA : 'Solve Now',
            back : 'Practice and test your knowledge across various subjects with a wide range of multiple choice questions.',
            color : theme.colors.main.primary,
            icon : <MdQuestionAnswer 
                color='white'
                size={25}
            />
        },
        {
            title : 'Past Papers',
            description : 'Unlock Success to access to past papers',
            CTA : 'Get Started',
            back : 'Prepare for exams and boost your confidence by accessing a vast collection of past papers.',
            color : '#EEAB46',
            icon : <GiPapers 
                color='white'
                size={25}
            />
        },
        {
            title : 'Chanllenges',
            description : 'Challenge your mind with daily challenges',
            CTA : 'See More',
            back : 'Challenge yourself daily with our thought-provoking exercises designed to expand your knowledge.',
            color : '#6BC36B',
            icon : <MdQuiz 
                color='white'
                size={25}
            />
        },
    ]

    return (
        <div className="w-[100vw] lg:w-fit overflow-auto py-[5px]">
            <div className="w-fit px-[20px] gap-5 lg:gap-10 flex lg:justify-center ">
                {
                    content.map((item, index : number) => (
                        <Card 
                            key={index}
                            title={item.title}
                            description={item.description}
                            CTA={item.CTA}
                            back={item.back}
                            color={item.color}
                            Icon={item.icon}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Cards