import theme from "@styles/theme";
import { FaLightbulb, FaMapLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { PiPlugFill } from "react-icons/pi";

export const data = [
    {
        title : 'Efficient Education',
        description : 'We ensure focused and efficient preparation that aligns with your individual needs',
        icon : PiPlugFill,
        color : theme.colors.main.primary
    },
    {
        title : 'Flexible Study Schedule',
        description : 'Create a study schedule that fits your lifestyle and commitments, helping you stay organized and motivated.',
        icon : FaLightbulb,
        color : theme.colors.main.allColors.blue.blue3
    },
    {
        title : 'Study anytime anywhere',
        description : 'Access PrepRoom on your favorite device, allowing you to study on the go.',
        icon : FaMapLocationDot,
        color : theme.colors.main.allColors.green.green3
    },
    {
        title : 'Peer Guidance',
        description : 'Receive guidance and support from your peers in the discussion sessions of every question.',
        icon : MdGroups,
        color : theme.colors.main.allColors.orange.orange3
    },
]