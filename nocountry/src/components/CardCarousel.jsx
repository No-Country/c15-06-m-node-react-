/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export function CardCarousel() {
    const data = [
        {
            name: 'Frutos secos y cereales',
            img: 'https://img.freepik.com/foto-gratis/vista-superior-cucharas-variedad-nueces_23-2148452903.jpg?w=900&t=st=1703014365~exp=1703014965~hmac=c025917c23989a7dd8abcaa31aad4fea60792d9464c8ce4bd014499da65215f4',
            url: '/products/category/Frutos%20secos%20y%20cereales'
        },
        {
            name: 'Hierbas y especias',
            img: 'https://img.freepik.com/fotos-premium/ajo-romero-laurel-pimienta-jamaica-pimienta-aislado-espacio-blanco-endecha-plana-vista-superior_168508-1256.jpg?w=996',
            url: '/products/category/Hierbas%20y%20especias',
            objectPosition: 'left center'
        },
        {
            name: 'Proteicos',
            img: 'https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2017/02/wooden-tray-of-protein-foods-fish-nuts-16x9.jpg',
            url: '/products/category/Proteicos'
        },
        {
            name: 'A base de legumbres',
            img: 'https://cardiosalud.org/wp-content/uploads/2019/10/legumbres-4.jpg',
            url: '/products/category/Legumbres'
        },
        {
            name: 'Infusiones',
            img: 'https://images.unsplash.com/photo-1576092762793-c0e9395ec4b9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            url: '/products/category/Infusiones'
        },
        {
            name: 'Mascotas',
            img: 'https://images.hola.com/imagenes/estar-bien/20180417122950/perro-gato-casa-convivencia/0-558-880/perro-gato-en-casa-1-t.jpg?tx=w_1200',
            url: '/products/category/Mascotas'
        }
    ]

    const settings = {
        dots: true,
        inifinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <div className='m-auto w-[90%]'>
            <div className='my-10 mb-28'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="h-[670px] w-[360px]">
                            <div className="w-[360px] flex justify-center items-center">
                                <img src={d.img} alt={d.name} className="h-[530px] w-[360px] object-cover rounded-2xl shadow-md" style={{ objectPosition: d.objectPosition || 'center center' }} />
                            </div>

                            <div className="font-rajdhani flex flex-col justify-center items-center gap-4 p-4" >
                                <p className="font-medium text-xl">{d.name}</p>
                                <Link to={d.url} className="text-palette-quaternary font-semibold text-xl px-8 py-3 rounded-lg border border-palette-quaternary hover:bg-palette-quaternary hover:text-white">Ver ahora!</Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}