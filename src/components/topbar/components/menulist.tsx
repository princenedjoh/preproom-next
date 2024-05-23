'use client'

import { socials } from "@/app/utils/socials"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme from "@styles/theme"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa6"
import { MdQuestionAnswer } from "react-icons/md"
import { PiExamFill } from "react-icons/pi";

const Menulist = () => {

    const pathname = usePathname()
    const pathnameSplit = pathname.split('/')
    const [menuItems, setMenuItems] =  useState([
        {
            name : 'Home',
            path : "/",
            active : pathnameSplit[1] === '' && true,
            icon : FaHome
        },
        {
            name : 'Questions',
            path : "/questions",
            active : pathnameSplit[1] === 'questions' && true,
            icon : MdQuestionAnswer
        },
        {
            name : 'Test',
            path : "/test",
            active : pathnameSplit[1] === 'test' && true,
            icon : PiExamFill
        },
        {
            name : 'Notication',
            path : "/notification",
            active : pathnameSplit[1] === 'notification' && true,
            icon : FaBell
        },
    ])

    return (
        <div className="Menulist flex flex-col gap-2">
            {
                menuItems.map((item, index : number) => (
                    <Link key={index} href={item.path}>
                        <div 
                            className={`${item.active ? 'bg-theme-colors-main-shadowLight' : 'none'} p-[10px] px-[25px] w-[60%] rounded-r-full`}
                        >
                            <div className='flex gap-1'>
                                <item.icon 
                                    color={item.active ? theme.colors.main.primary : theme.colors.main.text.body}
                                />
                                <Text
                                    bold={item.active ? TypographyBold.md : TypographyBold.sm}
                                    textColor={item.active ? theme.colors.main.primary : theme.colors.main.text.body}
                                >
                                    {item.name}
                                </Text>
                            </div>
                        </div>
                    </Link>
                ))
            }
            <div className="flex gap-2 px-[20px]">
                {
                    socials.map((social, index : number) => (
                        <Link
                            href={social.link}
                            target="_blank"
                        >
                            <div 
                                className="p-[10px] rounded-full bg-theme-colors-main-primary shadow-md"
                                key={index}
                            >
                                <social.icon 
                                    color="white"
                                    size={20}
                                />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Menulist