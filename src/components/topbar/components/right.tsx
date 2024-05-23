'use client'

import Chip from "@components/chip/chip";
import Badge from "@components/clickable/badge";
import ClickableTab from "@components/clickable/clickabletab";
import Clickable from "@components/clickable/clickabletab";
import AppTypography from "@styles/components/appTypography"
import { TypographySize } from "@styles/style.types";
import theme, { colors } from "@styles/theme";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import CourseSelector from "./courseSelector";
import Dropdown from "@components/input/dropown";

const Right = () => {
    const [course, setCourse] = useState('Computer Science')
    const [badges, SetBadges] = useState([
        {
            name : 'notification',
            text : "",
            dot : true,
            children : <FaBell size={15} color="inherit"/>,
            showBagde : true,
            active : true
        },
        {
            name : 'streak',
            children : <FaFireFlameCurved size={15} color={theme.colors.main.text.light} />,
            text : "99+",
            showBagde : true
        },
        {
            name : 'user',
            children : <FaUserCircle size={15} color={theme.colors.main.text.light} />,
            text : "",
            showBagde : false
        },
    ])

    return (
        <div className="Right hidden md:flex gap-[20px] items-center">
            <CourseSelector 
                state={course}
                setState={setCourse}
            />
            <div className="flex gap-[10px] items-end mt-[-3px]">
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
        </div>
    )
}
export default Right