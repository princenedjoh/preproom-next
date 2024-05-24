import theme from "@styles/theme"
import Card from "./card"
import { MdQuestionAnswer, MdQuiz } from "react-icons/md"
import { GiPapers } from "react-icons/gi"

const Cards = () => {

    const content = [
        {
            title : 'Past Papers',
            description : 'Unlock Success to access to past papers',
            CTA : 'Get Started',
            back : 'Prepare for exams and boost your confidence by accessing a vast collection of past papers.',
            color : '#EEAB46',
            icon : <GiPapers 
                color='#EEAB46'
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
                color='#6BC36B'
                size={25}
            />
        },
    ]

    return (
        <div 
            className="w-[100vw] flex flex-col items-center lg:items-start lg:w-fit overflow-auto py-[5px]"
            style={{
                marginTop : '-120px'
            }}
        >
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