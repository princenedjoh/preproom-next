import Safearea from "@styles/components/safearea"
import Text from "@styles/components/text"
import { TypographyBold, TypographySize } from "@styles/style.types"
import theme from "@styles/theme"

const History = () => {
    return (
        <Safearea>
            <div className="w-full flex flex-col gap-2">
                <div className="flex flex-col gap-1 w-full">
                    <Text
                        bold={TypographyBold.md}
                        size={TypographySize.md}
                        textColor={theme.colors.main.primary}
                    >
                        History
                    </Text>
                    <div className="w-full h-[1px] bg-theme-colors-main-borderColor">
                        
                    </div>
                </div>
            </div>
        </Safearea>
    )
}
export default History