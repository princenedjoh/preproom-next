import { baseProps } from "@/utils/@types"

const ClickableTab = ({
    children,
    className,
    onClick
} : baseProps) => {
    return (
        <div 
            className={`flex p-[7px] h-fit rounded-full hover:opacity-[0.9] duration-200 hover:bg-theme-colors-main-bg cursor-pointer !${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
export default ClickableTab