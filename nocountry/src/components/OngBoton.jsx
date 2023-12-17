import { Link } from "react-router-dom";

export function OngBoton() {
    return (
        <div className="flex justify-center mb-16">
            <button className="w-[360px] h-20 bg-green-100 hover:bg-green-200 font-bold text-2xl rounded-xl text-opacity-80 ml-[750px] -mt-20 font-rajdhani">
                <Link to={``}>Donar</Link>
            </button>
        </div>
    )
}