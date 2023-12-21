import fundacionSilvestre from '../imgs/fundacion-vida-silvestre.png';
import { OngBoton } from "./OngBoton";

export function OngSilvestre() {
    const ongSilvestre = {
        name: 'Fundación Vida Silvestre',
        info: 'La ONG Vida Silvestre Argentina, fundada en 1977, se dedica a la conservación de la biodiversidad en Argentina. Trabaja en la protección de ecosistemas, la promoción de políticas sustentables y la defensa de especies en peligro de extinción, contribuyendo activamente a la preservación del patrimonio natural del país.',
        url: 'https://www.vidasilvestre.org.ar/'
    }

    return (
        <div className='mt-14'>
            <div className="flex justify-center">
                <div className="w-[45%] font-nunito">
                    <h2 className="font-bold text-5xl">{ongSilvestre.name}</h2>
                    <p className="font-medium mt-7">{ongSilvestre.info}</p>
                    <p className="font-bold mt-9">Conocer más de esta ONG: <a href={ongSilvestre.url} target='blank' className='text-palette-quaternary'>{ongSilvestre.url}</a></p>
                </div>
                <div className="w-[428px] h-[319px] ml-32">
                    <img src={fundacionSilvestre} alt={ongSilvestre.name} className="object-cover w-full h-full shadow-xl rounded-2xl" />
                </div>
            </div>
            <div className="flex mx-[20%] -mt-8">
                <a href="https://donaronline.org/fundacion-vida-silvestre-argentina/socios" target="blank">
                    <OngBoton />
                </a>
            </div>
        </div>
    )
}