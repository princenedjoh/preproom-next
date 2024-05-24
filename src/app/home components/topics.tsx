'use client'

import Chip from "@components/chip/chip"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import { useState } from "react"

const Topics = () => {

    const [topics, setTopics] = useState(['Python', 'introduction to astrology', 'computer networks', 'astrophysics', 'cirsuit theory', 'Python', 'introduction to astrology', 'computer networks', 'astrophysics', 'cirsuit theory'])

    return (
        <div 
            className="flex px-[15px] md:pl-0 w-[100vw] lg:w-minimumWidth overflow-auto"
            style={{
                scrollbarWidth : 'none'
            }}    
        >
            <div className="flex gap-2 w-[300vw] md:w-fit items-center">
                <div>
                    <Text
                        textColor={theme.colors.main.primary}
                        bold={TypographyBold.md}
                    >
                        Topics
                    </Text>
                </div>
                {
                    topics.map((topic, index : number) => (
                        <Chip
                            key={index}
                            className="!whitespace-nowrap"
                        >
                            <Text>
                                {topic}
                            </Text>
                        </Chip>
                    ))
                }
            </div>
        </div>
    )
}
export default Topics