import LandingImg from '../imgs/VidaSustentable.jpg';

export function LandingInfo() {
    return(
        <div className="flex justify-center mt-10 mx-20">
            <div className='mt-16'>
                <h1 className="text-5xl font-rajdhani font-bold w-[400px]">EcoVida Store: Tu Destino Sostenible.</h1>
                <p className="text-2xl font-semibold mt-10 font-nunito">Sumérgete en un mundo de productos cuidadosamente seleccionados para tu bienestar y el del planeta. Siente la diferencia de una elección consciente.</p>
            </div>
            <div>
                <div className='w-[560px] h-[640px]'>
                    <img className='w-full h-full object-cover rounded-xl shadow-lg ml-10' src={LandingImg} alt="Vida sustentable" />
                </div>
            </div>
        </div>
    )
}