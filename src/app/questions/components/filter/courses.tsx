'use client'

import Container from "@components/container/container"
import Input from "@components/input/input"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { IoNewspaper } from "react-icons/io5"

const Courses = () => {

    const [value, setValue] = useState('')

    return (
        <Container
            className="!w-full"
        >
            <div className='flex flex-col w-full gap-2'>
                <div className="flex gap-2 items-center">
                    <Text
                        textColor={theme.colors.main.primary}
                    >
                        <IoNewspaper />
                    </Text>
                    <Text
                        textColor={theme.colors.main.primary}
                        bold={TypographyBold.sm2}
                    >
                        Courses
                    </Text>
                </div>
                <Input 
                    placeholder="Search Courses"
                    PreIcon={<Text><FiSearch /></Text>}
                    content={value}
                    setContent={setValue}
                    className="!bg-white"
                />
            </div>
        </Container>
    )
}
export default Courses