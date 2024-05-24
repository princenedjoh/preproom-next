import Cards from "./components/cards"
import Hero from "./components/hero"
import History from "./components/history"

const Test = () => {
    return (
        <div className="w-full flex flex-col items-center gap-5">
            <Hero />
            <Cards />
            <History />
        </div>
    )
}
export default Test