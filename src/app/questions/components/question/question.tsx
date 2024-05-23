'use client'

import Chip from "@components/chip/chip"
import Container from "@components/container/container"
import Text from "@styles/components/text"
import theme from "@styles/theme"
import Answer from "./answer"
import MainQuestion from "./mainQuestion"
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react"
import Impressions from "./impressions"

const Question = () => {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <Container
            className={`!p-[10px]`}
        >
            <div className="flex flex-col gap-2 w-full">
                <Chip
                    className="!bg-white"
                >
                    <Text
                        textColor={theme.colors.main.text.light}
                    >
                        Question 1
                    </Text>
                </Chip>
                <MainQuestion
                    showAnswer={showAnswer}
                    setShowAnswer={setShowAnswer}
                />
                <AnimatePresence>
                    {
                        showAnswer &&
                        <motion.div
                            initial={{
                                opacity : 0,
                                y : -10
                            }}
                            animate={{
                                opacity : 1,
                                y : 1
                            }}
                            exit={{
                                opacity : 0,
                                y : -10
                            }}
                        >
                            <Answer
                                showAnswer={showAnswer}
                                setShowAnswer={setShowAnswer}
                            />
                        </motion.div>
                    }
                </AnimatePresence>
                <Impressions />
            </div>
        </Container>
    )
}
export default Question