'use client'

import Chip from "@components/chip/chip"
import DropdownContainer from "@components/container/dropdownContainer"
import Input from "@components/input/input"
import AppTypography from "@styles/components/appTypography"
import { colors } from "@styles/theme"
import { Dispatch, SetStateAction, useState } from "react"
import { FaCaretDown, FaCaretRight } from "react-icons/fa6"

const MobileCourseSelector = ({
    className,
    state,
    setState
} : {
    className? : string,
    state : string,
    setState : Dispatch<SetStateAction<string>>
}) => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [inputContent, setInputContent] = useState<string>("")
    const handleItemClick = (course : number) => {
        setState(`Course ${course}`)
        setShowDropdown(false)
    }

    return (
        <div className={`Mobile-Course-selector relative flex flex-col !${className}`}>
            <Chip
                onClick={()=>setShowDropdown(!showDropdown)} 
                className="hover:!bg-theme-colors-main-bg"  
            >
                <div className="w-full flex justify-start py-[7px]">
                    <div className="flex w-full gap-[4px] justify-between items-center">
                        <AppTypography
                            ellipsis
                            maxLines={1}
                        >
                            {state}
                        </AppTypography>
                        <FaCaretRight
                            className={`${showDropdown ? 'rotate-90' : 'rotate-0' } duration-200`}
                            color={colors.dark[7]}
                        />
                    </div>
                </div>
            </Chip>
            <div className="absolute mt-[50px] flex w-full">
                <DropdownContainer
                    show={showDropdown}
                    setShow={setShowDropdown}
                    className="!w-full !p-[10px]"
                >
                    <div className="flex flex-col gap-2 w-full">
                        <Input 
                            content={inputContent}
                            setContent={setInputContent}
                            placeholder="Search course names"
                            className="!bg-theme-colors-main-bg "
                        />
                        <div className="flex flex-col gap-[2px]">
                            {
                                [1,2,3,4,5,6].map((course, index : number) => (
                                    <div 
                                        key={index}
                                        className="px-[10px] py-[4px] duration-200 hover:bg-theme-colors-main-shadowLight rounded-[5px] w-full cursor-pointer "
                                        onClick={()=>handleItemClick(course)}
                                    >
                                        <AppTypography>
                                            Course {index + 1}
                                        </AppTypography>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </DropdownContainer>
            </div>
        </div>
    )
}
export default MobileCourseSelector