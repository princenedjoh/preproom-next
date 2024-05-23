import ClickableTab from "@components/clickable/clickabletab"
import Text from "@styles/components/text"
import theme from "@styles/theme"
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs"
import { MdMarkUnreadChatAlt } from "react-icons/md"

const Impressions = () => {
    return (
        <div className="flex gap-2">
            <ClickableTab
                className="hover:!bg-white hover:opacity-[0.8] !py-[2px]"
            >
                <div className="flex gap-1 items-center">
                    <MdMarkUnreadChatAlt
                        size={14}
                        color={theme.colors.main.text.light}
                    />
                    <Text>
                        Discussions
                    </Text>
                </div>
            </ClickableTab>
            <ClickableTab
                className="hover:!bg-white hover:opacity-[0.8] !py-[2px]"
            >
                <div className="flex gap-1 items-center">
                    <BsBookmarkHeart
                        size={14}
                        color={theme.colors.main.text.light}
                    />
                    <Text>
                        Saved
                    </Text>
                </div>
            </ClickableTab>
        </div>
    )
}
export default Impressions