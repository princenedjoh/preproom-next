'use client'

import Container from "@components/container/container"
import Dropdown from "@components/input/dropown"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import { useState } from "react"
import { FaSortAmountDown } from "react-icons/fa"
import { FaLock, FaSortDown, FaSortUp } from "react-icons/fa6"

const Sort = () => {

    const [value, setValue] = useState<0 | 1 | 2>(0)

    return (
        <Container
            className="!w-full"
        >
            <div className='flex flex-col w-full gap-2'>
                <div className="flex gap-2 items-center">
                    <Text
                        textColor={theme.colors.main.primary}
                    >
                        <FaSortAmountDown />
                    </Text>
                    <Text
                        textColor={theme.colors.main.primary}
                        bold={TypographyBold.sm2}
                    >
                        Sort
                    </Text>
                </div>
                <Container
                    className="!w-full !bg-white"
                >
                    <div className='w-full gap-2 flex justify-between items-center'>
                        <div className="flex items-center gap-2">
                            <Text><FaLock /></Text>
                            <Text>
                                Difficulty
                            </Text>
                        </div>
                        <div className="flex flex-col h-fit">
                            <Text><FaSortUp /></Text>
                            <Text><FaSortDown /></Text>
                        </div>
                    </div>
                </Container>
            </div>
        </Container>
    )
}
export default Sort