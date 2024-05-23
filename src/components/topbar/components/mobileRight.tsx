'use client'

import Badge from "@components/clickable/badge";
import ClickableTab from "@components/clickable/clickabletab";
import Drawer from "@components/drawer/drawer";
import theme, { colors } from "@styles/theme";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBell, FaFireFlameCurved } from "react-icons/fa6";
import { RiMenuFold2Fill } from "react-icons/ri";
import MobileMenu from "./mobileMenu";
import { IoFilterSharp } from "react-icons/io5";
import FilterMenu from "./filterMenu";

const MobileRight = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false)
    const [badges, SetBadges] = useState([
        {
            name : 'streak',
            children : 
                <IoFilterSharp 
                    color={'inherit'}
                    onClick={()=>setShowFilterMenu(!showFilterMenu)}
                />,
            text : "",
            showBagde : false,
            active : false
        },
        {
            name : 'streak',
            children : <FaFireFlameCurved color={'inherit'} />,
            text : "999+",
            showBagde : true,
            active : true
        },
    ])

    return (
        <div className="MobileRight flex md:hidden gap-[2px] items-center">
            <div className="flex gap-[7px] items-end mt-[-3px]">
                {
                    badges.map((item, index : number) => (
                        <Badge
                            key={index}
                            text={item.text}
                            showBadge={item.showBagde}
                            active={item.active}
                        >
                            <ClickableTab>
                                {item.children}
                            </ClickableTab>
                        </Badge>
                    ))
                }
            </div>
            <ClickableTab 
                className="rounded-[5px]"
                onClick={()=>setShowMenu(!showMenu)}
            >
                <RiMenuFold2Fill 
                    size={25}
                    color={colors.dark[4]}
                />
            </ClickableTab>
            <MobileMenu 
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
            <FilterMenu 
                showMenu={showFilterMenu}
                setShowMenu={setShowFilterMenu}
            />
        </div>
    )
}
export default MobileRight