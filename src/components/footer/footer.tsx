import AppTypography from "@styles/components/appTypography"
import { TypographyBold } from "@styles/style.types"

const Footer = () => {
    return (
        <div className="w-full px-[20px] py-[20px] bg-theme-colors-main-shadowLight flex justify-center items-center">
            <AppTypography>
                Made with ❤️ by <AppTypography bold={TypographyBold.md}>Prince Nedjoh</AppTypography>
            </AppTypography>
        </div>
    )
}
export default Footer