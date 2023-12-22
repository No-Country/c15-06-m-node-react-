import { Link } from "react-router-dom";
import HojasLatDer from '../imgs/hoja-planta-der-2.png'
import Circulo from '../imgs/circulo.png'

export function CompraExitosa() {
    return (
        <div>
            <p className=' text-5xl font-bold  mt-20 mx-40'>
                <Link to='/' className="bg-gradient-to-r from-palette-primary to-palette-senary text-transparent bg-clip-text font-rajdhani">
                    ECOVIDA.STORE
                </Link>
            </p>
            <div className="mt-20 flex justify-center">
                <img src={Circulo} alt="Símbolo correcto" />
            </div>
            <div className="font-nunito text-center mt-10">
                <p className="text-4xl font-bold text-palette-duodenary">Compra realizada con éxito!</p>
                <div className="mt-10 text-xl font-semibold">
                    <p >Gracias por elegir la sostenibildad y hacer la diferencia.</p>
                    <p>¡Entre todos hacemos un mundo más verde y consciente!</p>
                </div>
                <div className="flex justify-end -mt-20">
                    <img src={HojasLatDer} alt="Hojas de planta" />
                </div>
                <div className="flex justify-start -mt-32 mx-20">
                    <Link to='/products' className="border-2 shadow-md bg-palette-senary bg-opacity-10 rounded-full p-5 font-rajdhani font-medium w-56">Seguir comprando</Link>
                </div>
            </div>
        </div>
    )
}