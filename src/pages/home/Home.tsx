import { MoveRight } from "lucide-react"
import { NavLink } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex justify-center items-center mt-16">
            <NavLink
                to={'/dashboard'}
                type="submit"
                className="bg-[#3F97FF] cursor-pointer text-white px-10 py-3 rounded hover:bg-opacity-90 mt-8 flex items-center gap-2 "
            >
                <span>Go to Dashboard </span> <MoveRight />
            </NavLink>
        </div>
    )
}

export default Home