'use client'

import { hexOpacity } from "@/app/utils/hexOpacity"
import Button from "@components/button/button"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import { ReactNode, useState } from "react"

const Card = ({
    title,
    description,
    CTA,
    back,
    color,
    Icon
} : {
    title : string,
    description : string,
    CTA : string,
    back : string,
    color : string,
    Icon : ReactNode
}) => {

    const [onHover, setOnHover] = useState<boolean>(false)

    return (
        <div 
            className="Card relative w-[200px] h-[200px] cursor-pointer"
            onMouseOver={()=>setOnHover(true)}
            onMouseLeave={()=>setOnHover(false)}
        >
            <div 
                className="w-[160px] h-[150px] rounded-lg absolute top-0 left-0 flex justify-center pt-[15px]"
                style={{
                    backgroundColor : color
                }}
            >
                {Icon}
            </div>
            <div 
                className={`p-[10px] w-[160px] h-[150px] rounded-lg bg-white shadow-lg shadow-theme-colors-main-shadow absolute bottom-0 right-0 duration-200 `}
                    style={{
                        transform : onHover ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        border : `1px solid ${color}${hexOpacity(40)}`,
                        boxShadow : `0 0 10px ${color}${hexOpacity(40)}`
                    }}
            >
                <div className={`${onHover ? 'hidden' : 'flex'} h-full items-center justify-center flex-col gap-2`}>
                    <Text
                        bold={TypographyBold.md}
                    >
                        {title}
                    </Text>
                    <Text
                        textAlign="center"
                        textColor={color}
                    >
                        {description}
                    </Text>
                    <Button
                        background={color}
                        border="none"
                    >
                       {CTA}
                    </Button>
                </div>
                <div 
                    className={`${onHover ? 'flex' : 'hidden'} h-full items-center justify-center flex-col gap-2`}
                    style={{
                        transform : 'rotateY(-180deg)'
                    }}
                >
                    <Text
                        textAlign="center"
                        textColor={color}
                    >
                        {back}
                    </Text>
                    <Button
                        background={color}
                        border="none"
                    >
                        {CTA}
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Card