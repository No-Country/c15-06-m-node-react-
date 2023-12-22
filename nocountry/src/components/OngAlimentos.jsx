import bancoAlimentosImg from '../imgs/banco-alimentos.png';
import { OngBoton } from "./OngBoton";

export function OngAlimentos() {
    const bancoAlimentos = {
        name: 'Banco de alimentos',
            info: 'Banco de Alimentos es una ONG que contribuye a reducir el hambre, mejorar la nutrición y evitar el desperdicio de alimentos. Reciben donaciones de alimentos y productos de parte de empresas, productores agropecuarios y supermercados, que luego distribuyen entre organizaciones sociales que brindan asistencia alimentaria en CABA y GBA. Bajo el lema MENOS HAMBRE, MÁS FUTURO buscan ser un puente entre los que sufren hambre y aquellos que desean colaborar.',
            url: 'https://www.bancodealimentos.org.ar/'
    }

    return (
        <div className='mt-14'>
            <div className="flex justify-center">
                <div className="w-[415px] h-[308px]">
                    <img src={bancoAlimentosImg} alt={bancoAlimentos.name} className="object-cover w-full h-full rounded-2xl shadow-sm" />
                </div>
                <div className="w-[50%] ml-20 font-nunito">
                    <h2 className="font-bold text-5xl">{bancoAlimentos.name}</h2>
                    <p className="font-medium mt-7">{bancoAlimentos.info}</p>
                    <p className="font-bold mt-9">Conocer más de esta ONG: <a href={bancoAlimentos.url} target='blank' className='text-palette-quaternary'>{bancoAlimentos.url}</a></p>
                </div>
            </div>
            <div className="flex mx-[50%] mb-10">
                <a href="https://www.bancodealimentos.org.ar/donate/" target="blank">
                    <OngBoton />
                </a>
            </div>
        </div>
    )
}