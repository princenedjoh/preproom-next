'use client'

import Dropdown from "@components/input/dropown"
import Input from "@components/input/input"
import theme from "@styles/theme"
import { useState } from "react"
import { LuSearch } from "react-icons/lu"

const Search = () => {

    const [searchValue, setSearchValue] = useState('')
    const [dropdownValue, setDropdownValue] = useState('')

    return (
        <div className="flex gap-2 w-full px-[15px] md:px-0">
            <Input 
                placeholder="Search for courses"
                content={searchValue}
                setContent={setSearchValue}
                className="!flex-1 !rounded-full md:!rounded-md"
                PreIcon={<LuSearch color={theme.colors.main.text.light}/>}
            />
            <Dropdown 
                placeholder="Difficulty"
                state={dropdownValue}
                setState={setDropdownValue}
                className="!hidden md:!flex"
            />
        </div>
    )
}
export default Search