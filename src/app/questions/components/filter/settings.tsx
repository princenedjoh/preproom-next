'use client'

import Container from "@components/container/container"
import Dropdown from "@components/input/dropown"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import { useState } from "react"
import { FaGear } from "react-icons/fa6"

const Settings = () => {

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
                        <FaGear />
                    </Text>
                    <Text
                        textColor={theme.colors.main.primary}
                        bold={TypographyBold.sm2}
                    >
                        Settings
                    </Text>
                </div>
                <Dropdown
                    state={value}
                    setState={setValue}
                    className="!bg-white"
                    dropdownClassName="!w-full"
                />
            </div>
        </Container>
    )
}
export default Settings