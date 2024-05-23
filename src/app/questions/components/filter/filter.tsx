import Courses from "./courses"
import Schools from "./schools"
import Settings from "./settings"
import Sort from "./sort"
import Ads from "./ads"

const Filter = ({
    className
} : {
    className? : string
}) => {
    return (
        <div className={`flex flex-col gap-5 w-[250px] ${className}`}>
            <Settings />
            <Sort />
            <Courses />
            <Schools />
            {/* <Ads /> */}
        </div>
    )
}
export default Filter