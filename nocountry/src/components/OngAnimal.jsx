import fundacionHuellaImg from '../imgs/fundacion-huella-1.png';
import { OngBoton } from "./OngBoton";

export function OngAnimal() {
    const huellaAnimal = {
        name: 'Fundación Huella Animal',
        info: 'Fundación Huella Animal es una organización sin fines de lucro que nace el año 2015 con el propósito de dar solución a la problemática de Bienestar Animal y Tenencia Responsable de Mascotas y Animales de Compañía en Chile. Hoy en día hemos crecido mucho como equipo y nos hemos formado en distintas áreas para: Hacer del mundo un lugar mejor para los animales.',
        url: 'https://fundacionhuellaanimal.cl/'
    }

    return (
        <div>
            <div className="flex justify-center">
                <div className="w-[415px] h-[308px]">
                    <img src={fundacionHuellaImg} alt={huellaAnimal.name} className="object-cover w-full h-full" />
                </div>
                <div className="w-[50%] ml-20 font-nunito">
                    <h2 className="font-bold text-5xl">{huellaAnimal.name}</h2>
                    <p className="font-medium mt-7">{huellaAnimal.info}</p>
                    <p className="font-bold mt-9">Conocer más de esta ONG: <a href={huellaAnimal.url} target='blank' className='text-palette-quaternary'>{huellaAnimal.url}</a></p>
                </div>
            </div>
            <div className="flex mx-[50%] -mt-5">
                <a href="https://fundacionhuellaanimal.cl/donar/" target="blank">
                    <OngBoton />
                </a>
            </div>
        </div>
    )
}