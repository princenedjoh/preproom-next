'use client'

import Button from "@components/button/button"
import Text from "@styles/components/text"
import { useState } from "react"

const Card = () => {

    const [onHover, setOnHover] = useState<boolean>(false)

    return (
        <div 
            className="Card relative w-[200px] h-[200px] cursor-pointer"
            onMouseOver={()=>setOnHover(true)}
            onMouseLeave={()=>setOnHover(false)}
        >
            <div className="w-[160px] h-[150px] rounded-lg bg-cyan-400 absolute top-0 left-0">

            </div>
            <div 
                className={`p-[10px] w-[160px] h-[150px] rounded-lg bg-white border-[1px] border-solid ${onHover ? 'border-theme-colors-main-primary' : 'border-theme-colors-main-shadow'} shadow-lg shadow-theme-colors-main-shadowLight absolute bottom-0 right-0 duration-200 `}
                    style={{
                        transform : onHover ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
            >
                <div className={`${onHover ? 'hidden' : 'flex'} h-full items-center justify-center flex-col gap-2`}>
                    <Text>
                        MCQS
                    </Text>
                    <Text
                        textAlign="center"
                    >
                        Solve Multiple Choice questions
                    </Text>
                    <Button>
                        Get Started
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
                    >
                        Practice and test your knowledge across various subjects with a wide range of multiple choice questions.
                    </Text>
                    <Button>
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default Card