'use client'

import Drawer from "@components/drawer/drawer"
import { Dispatch, SetStateAction, useState } from "react"
import MobileCourseSelector from "./mobileCourseSelector"
import Image from "next/image"
import { FaUserCircle } from "react-icons/fa"
import AppTypography from "@styles/components/appTypography"
import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme, { colors } from "@styles/theme"
import Menulist from "./menulist"
import Button from "@components/button/button"
import { TbLogout } from "react-icons/tb"
import OutlineButton from "@components/button/outlineButton"

const MobileMenu = ({
    showMenu,
    setShowMenu,
} : {
    showMenu : boolean,
    setShowMenu : Dispatch<SetStateAction<boolean>>,
}) => {
    
    const [course, setCourse] = useState('Computer mobile')

    return (
        <div className="MobileMenu">
            <Drawer 
                showdrawer={showMenu}
                setShowdrawer={setShowMenu}
                head={
                    <div className={`flex gap-2 items-center`}>
                        <FaUserCircle 
                            size={30}
                            color={colors.dark[7]}
                        />
                        <div className={`flex flex-col gap-[0px]`}>
                            <Text
                                bold={TypographyBold.md}
                            >
                                Prince Nedjoh
                            </Text>
                            <Text
                                textColor={theme.colors.main.text.light}
                                size={TypographySize.xs}
                                className="mt-[-2px]"
                            >
                                princenedjoh5@gmail.com
                            </Text>
                        </div>
                    </div>
                }
            >
                <div className='flex flex-col justify-between h-[78vh]'>
                    <div className="flex flex-col gap-3">
                        <div className="px-[20px] mt-[5px]">
                            <MobileCourseSelector
                                state={course}
                                setState={setCourse}
                            />
                        </div>
                        <Menulist />
                    </div>
                    <div className='px-[20px]'>
                        <OutlineButton
                            size={{
                                width : '100%',
                                height : '40px'
                            }}
                        >
                            <div className="gap-2 w-fit justify-center flex items-center">
                                <TbLogout />
                                <Text
                                    textColor={theme.colors.main.primary}
                                >
                                    Logout
                                </Text>
                            </div>
                        </OutlineButton>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}
export default MobileMenu