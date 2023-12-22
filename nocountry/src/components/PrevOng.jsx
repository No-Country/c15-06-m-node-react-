import HojasLatDer from '../imgs/hoja-planta-der.png'

export function PrevOng() {
    return (
        <div>
            <div className='font-nunito mt-20 bg-palette-denary bg-opacity-50 w-[80%] p-24 rounded-lg'>
                <h1 className='text-5xl font-bold w-[700px]'>Porque cada pequeña acción, hace una gran diferencia</h1>
                <p className='text-xl mt-14 font-bold'>En EcoVidaStore, no solo nos esforzamos por ofrecer alternativas respetuosas con el medio ambiente, sino que también creemos en devolver a la comunidad. A través de nuestra opción de donación, proporcionamos a nuestros usuarios la oportunidad de contribuir a instituciones cuyas causas están alineadas con nuestros valores de sostenibilidad. Creemos firmemente en el poder de hacer el bien, y cada compra realizada a través de nuestra plataforma no solo impacta positivamente en el medio ambiente, sino también en comunidades y causas que comparten nuestro compromiso con un futuro más sostenible.</p>
            </div>
            <div className='flex justify-end -mt-80'>
                <img src={HojasLatDer} alt="Hojas de planta" />
            </div>
        </div>
    )
}