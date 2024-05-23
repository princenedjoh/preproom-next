'use client'

import Chip from "@components/chip/chip"
import Container from "@components/container/container"
import Dropdown from "@components/input/dropown"
import Input from "@components/input/input"
import Text from "@styles/components/text"
import { TypographyBold } from "@styles/style.types"
import theme, { colors } from "@styles/theme"
import { useState } from "react"
import { FaGear } from "react-icons/fa6"
import { FiSearch } from "react-icons/fi"
import { MdCancel, MdSchool } from "react-icons/md"
import { AnimatePresence, motion } from 'framer-motion';

const Schools = () => {

    const [value, setValue] = useState('')
    const [schools, setSchools] = useState(['KNUST', 'UCC', 'UG', 'UMAT', 'Stanford', 'NYU', 'YALE'])
    const [selectedSchools, setSelectedSchools] = useState<string[]>([])

    const handleSchoolClick = (schoolIndex : number) => {
        setSelectedSchools(prev => [...prev, schools[schoolIndex]])
        setSchools(prev => prev.filter(index => index != schools[schoolIndex]))
    }

    const handleSelectedSchoolClick = (schoolIndex : number) => {
        setSchools(prev => [...prev, selectedSchools[schoolIndex]])
        setSelectedSchools(prev => prev.filter(index => index != selectedSchools[schoolIndex]))
    }

    return (
        <Container
            className="!w-full"
        >
            <div className='flex flex-col w-full gap-2'>
                <div className="flex gap-2 items-center">
                    <Text
                        textColor={theme.colors.main.primary}
                    >
                        <MdSchool />
                    </Text>
                    <Text
                        textColor={theme.colors.main.primary}
                        bold={TypographyBold.sm2}
                    >
                        Schools
                    </Text>
                </div>
                {
                    selectedSchools.length > 0 &&
                    <div className='flex gap-2 flex-wrap'>
                        {
                            selectedSchools.map((school, index) => (
                                <AnimatePresence>
                                    <motion.div
                                        initial={{
                                            opacity : 0
                                        }}
                                        animate={{
                                            opacity : 1,
                                            transition : {duration : 0.3}
                                        }}
                                        exit={{
                                            opacity : 0
                                        }}
                                        key={index}
                                        onClick={()=>handleSelectedSchoolClick(index)}
                                    >
                                        <Chip
                                            className="!bg-white hover:!bg-theme-colors-main-bg2"
                                        >
                                            <div className='flex gap-1 items-center'>
                                                    <Text>
                                                        {school}
                                                    </Text>
                                                    <Text>
                                                        <MdCancel 
                                                            color={colors.dark[6]}
                                                        />
                                                    </Text>
                                            </div>
                                        </Chip>
                                    </motion.div>
                                </AnimatePresence>
                            ))
                        }
                    </div>
                }
                <Input 
                    placeholder="Search Schools"
                    PreIcon={<Text><FiSearch /></Text>}
                    content={value}
                    setContent={setValue}
                />
                <div className='flex gap-2 flex-wrap'>
                    {
                        schools.map((school, index) => (
                            <AnimatePresence>
                                <motion.div
                                    initial={{
                                        opacity : 0
                                    }}
                                    animate={{
                                        opacity : 1,
                                        transition : {duration : 0.3}
                                    }}
                                    exit={{
                                        opacity : 0
                                    }}
                                    key={index}
                                    onClick={()=>handleSchoolClick(index)}
                                >
                                    <Chip
                                        className="!bg-white hover:!bg-theme-colors-main-bg2"
                                    >
                                        <Text>
                                            {school}
                                        </Text>
                                    </Chip>
                                </motion.div>
                            </AnimatePresence>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}
export default Schools