import { Link } from "react-router-dom";

export function LandingBoton() {
    return (
        <div className="mx-40 -mt-40">
            <button className="w-[360px] h-20 text-white bg-palette-quaternary font-semibold text-2xl px-8 py-3 rounded-full border border-palette-quaternary hover:bg-white hover:text-palette-quaternary font-rajdhani">
                <Link to={``}>Explorar ahora</Link>
            </button>
        </div>
    )
}