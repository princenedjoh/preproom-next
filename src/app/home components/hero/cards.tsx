import Card from "./card"

const Cards = () => {
    return (
        <div className="w-[100vw] lg:w-fit overflow-auto">
            <div className="w-fit px-[15px] gap-5 lg:gap-10 flex lg:justify-center ">
                {
                    [1,2,3].map((item, index : number) => (
                        <Card 
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Cards