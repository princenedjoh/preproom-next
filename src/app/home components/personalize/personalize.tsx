'use client'

import Button from "@components/button/button"
import Text from "@styles/components/text"
import Title from "../title"
import { data } from "./data"
import PersonalizeCard from "./personalizeCard"

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
                <div className="w-full relative lg:w-[500px] flex flex-col gap-4 lg:items-end">
                    {
                        data.map((item, index : number) => (
                            <PersonalizeCard
                                key={index}
                                index={index}
                                color={item.color}
                                Icon={item.icon}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Personalize