'use client'

import { hexOpacity } from "@/app/utils/hexOpacity"
import Text from "@styles/components/text";
import { TypographyBold, TypographySize } from "@styles/style.types";
import { useState } from 'react';
import { IconType } from "react-icons";

const PersonalizeCard = ({
    index,
    color,
    Icon,
    title,
    description
} : {
    index : number
    color : string
    Icon : IconType
    title : string
    description : string
}) => {

    const [onHover, setOnHover] = useState<boolean>(false)

    return (
        <div 
            className={`w-full p-[20px] lg:w-[80%] relative ${index % 2 === 1 ? 'lg:right-[110px]' : 'lg:left-0'} rounded-lg border-[1px] border-solid hover:rotate-[2deg] curosr-pointer duration-200`}
            onMouseOver={()=>setOnHover(true)}
            onMouseLeave={()=>setOnHover(false)}
            style={{
                border : `1px solid ${color}${hexOpacity(20)}`,
                boxShadow : onHover ? `0 0 10px ${color}${hexOpacity(10)}` : `none`
            }}
        >
            <div className="flex gap-2 items-center">
                <div 
                    className="w-[50px] h-[50px] rounded-full flex justify-center items-center "
                    style={{
                        backgroundColor : `${color}${hexOpacity(20)}`
                    }}
                >
                    <Icon 
                        size={30}
                        color={color}
                    />
                </div>
                <div className="flex flex-col flex-1 gap-1">
                    <Text
                        bold={TypographyBold.md}
                        textColor={color}
                        size={TypographySize.md}
                    >
                        {title}
                    </Text>
                    <Text>
                        {description}
                    </Text>
                </div>
            </div>
        </div>
    )
}
export default PersonalizeCard