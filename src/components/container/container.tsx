import { baseProps } from "@/utils/@types"

const Container = ({
    children,
    className,
    onClick
} : baseProps) => {
    return (
        <div 
            className={`flex p-[5px] rounded-[5px] bg-theme-colors-main-bg border-[1px] border-solid border-theme-colors-main-borderColor ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}
export default Container