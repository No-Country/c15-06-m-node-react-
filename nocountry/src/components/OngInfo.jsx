import { Link } from 'react-router-dom'
import caracteristicasOng from '../imgs/caracteristicasOng.png'

export function OngInfo() {
    return (
        <div className='w-[620px] self-center mx-16'>
            <h2 className='text-right text-3xl font-bold mb-4'>Fundación Huella Animal</h2>
            <p className='text-xl'>
                Fundación Huella Animal es una organización sin fines de lucro que nace el año 2015 con el propósito de dar solución a la problemática de Bienestar Animal y Tenencia Responsable de Mascotas y Animales de Compañía en Chile. Hoy en día hemos crecido mucho como equipo y nos hemos formado en distintas áreas para: Hacer del mundo un lugar mejor para los animales.
            </p>
            <Link to={`https://fundacionhuellaanimal.cl/`} target='blank'>
                <p className='mt-4 font-bold'>https://fundacionhuellaanimal.cl/</p>
            </Link>
        </div>
    )
}