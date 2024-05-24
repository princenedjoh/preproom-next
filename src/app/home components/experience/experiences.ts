import theme from "@styles/theme";
import { FaLightbulb, FaMapLocationDot } from "react-icons/fa6";
import { PiPlugFill } from "react-icons/pi";

export const experience = [
    {
        title : 'Boost your performance',
        description : 'Leverage detailed insights to focus your efforts on areas that need improvements',
        icon : PiPlugFill,
        color : theme.colors.main.allColors.orange.orange3
    },
    {
        title : 'Personalize your studies',
        description : 'Tailor your study sessions by selecting specific topics, setting study goals and creating a personalized study planTailor your study sessions by selecting specific topics, setting study goals and creating a personalized study plan',
        icon : FaLightbulb,
        color : theme.colors.main.allColors.blue.blue3
    },
    {
        title : 'Study anytime anywhere',
        description : 'Access PrepRoom on your favorite device, allowing you to study on the go.',
        icon : FaMapLocationDot,
        color : theme.colors.main.allColors.green.green3
    },
]