import Cards from "./cards"
import Head from "./head"

const Hero = () => {
    return (
        <div className="Hero flex flex-col gap-5 w-full lg:w-minimumWidth items-center">
            <Head />
            <Cards />
        </div>
    )
}
export default Hero