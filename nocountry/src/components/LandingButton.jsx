import { Link } from "react-router-dom";

export function LandingButton() {
    return (
        <div>
            <Link to={`/products`} className="w-80 h-20 text-white bg-palette-quaternary font-semibold text-3xl items-center flex justify-center px-8 py-3 rounded-full border border-palette-quaternary hover:bg-white hover:text-palette-quaternary font-rajdhani">Explorar ahora</Link>
        </div>
    )
}