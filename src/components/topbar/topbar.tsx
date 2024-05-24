'use client'

import AppTypography from "@styles/components/appTypography"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Right from "./components/right"
import MobileRight from "./components/mobileRight"
import { usePathname } from "next/navigation"

const Topbar = () => {

    const pathname = usePathname()
    const pathnameSplit = pathname.split('/')
    const [menuItems, setMenuItems] =  useState([
        {
            name : 'Home',
            path : "/",
            active : pathnameSplit[1] === '' && true
        },
        {
            name : 'Questions',
            path : "/questions",
            active : pathnameSplit[1] === 'questions' && true
        },
        {
            name : 'Test',
            path : "/test",
            active : pathnameSplit[1] === 'test' && true
        },
    ])

    return (
        <div className={`Topbar-main flex px-[15px] fixed w-full z-50 items-center justify-center h-[50px] md:h-[70px] border-b-[1px] bg-white border-solid border-theme-colors-main-borderColor `}>
            <div className="flex w-full md:w-minimumWidth justify-between items-center">
                <div className="Left flex md:gap-[150px] items-center">
                    <Link href={'/'}>
                        <div className="flex bg-colors-dark-9 relative justify-center items-center w-[25px] h-[25px] rounded-[5px] overflow-hidden">
                            <Image
                                src={require('@/app/favicon.ico')}
                                alt={'default image'}
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                            />
                        </div>
                    </Link>
                    <div className="Menuitems hidden md:flex gap-[25px]">
                        {
                            menuItems.map((item, index : number) => (
                                <Link 
                                    href={item.path}
                                    key={index}     
                                >
                                    <div 
                                        className={`Clickablelink pb-[3px] pt-[0.8px] px-[15px] rounded-full ${item.active ? 'bg-theme-colors-main-primary' : 'none'} ${item.active ? 'hover:bg-theme-colors-main-primary' : 'hover:bg-theme-colors-main-bg'} cursor-pointer duration-200 `}   
                                    >
                                        <AppTypography
                                            textColor={item.active ? 'white' : theme.colors.main.text.body}
                                        >
                                            {item.name}
                                        </AppTypography>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <Right />
                <MobileRight />
            </div>
        </div>
    )
}
export default Topbar