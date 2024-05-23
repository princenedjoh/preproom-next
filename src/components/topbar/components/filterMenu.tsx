'use client'

import Drawer from "@components/drawer/drawer"
import Text, { Head1 } from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"
import { Dispatch, SetStateAction, useState } from "react"
import { IoFilterSharp } from "react-icons/io5"

const FilterMenu = ({
    showMenu,
    setShowMenu,
} : {
    showMenu : boolean,
    setShowMenu : Dispatch<SetStateAction<boolean>>,
}) => {

    return (
        <div className="MobileMenu">
            <Drawer
                showdrawer={showMenu}
                setShowdrawer={setShowMenu}
                head={
                    <div className='flex gap-2 text-colors-main-primary items-center'>
                        <IoFilterSharp />
                        <Text
                            bold={TypographyBold.lg}
                            size={TypographySize.md2}
                            textColor={theme.colors.main.primary}
                        >
                            Filter
                        </Text>
                    </div>
                }
            >

            </Drawer>
        </div>
    )
}
export default FilterMenu