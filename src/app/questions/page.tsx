import AppTypography from "@styles/components/appTypography"
import Topics from "./components/topics"
import Input from "@components/input/input"
import Search from "./components/search"

const Questions = () => {
    return (
        <div className="Questions flex flex-col gap-2 w-full md:items-center">
            <div className="Wrapper flex md:gap-5 w-fit md:w-minimumWidth">
                <div className="Wrapper flex flex-1 flex-col gap-3 md:gap-5 w-fit md:w-full">
                    <Topics />
                    <Search />
                </div>
                <div className="hidden md:flex w-[250px] bg-theme-colors-main-bg rounded-xl h-[500px]">

                </div>
            </div>
        </div>
    )
}
export default Questions