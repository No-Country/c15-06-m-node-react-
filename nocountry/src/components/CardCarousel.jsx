/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export function CardCarousel() {
    const data = [
        {
            name: 'Frutos secos y cereales',
            img: 'https://img.freepik.com/foto-gratis/vista-superior-cucharas-variedad-nueces_23-2148452903.jpg?w=996&t=st=1702915531~exp=1702916131~hmac=71b3b27624933435382dde729f60e870e4092c1d7172da29544310616c319ef4',
            url: '/'
        },
        {
            name: 'Hierbas y especias',
            img: 'https://img.freepik.com/fotos-premium/ajo-romero-laurel-pimienta-jamaica-pimienta-aislado-espacio-blanco-endecha-plana-vista-superior_168508-1256.jpg?w=996',
            url: '/',
            objectPosition: 'left center'
        },
        {
            name: 'Proteicos',
            img: 'https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2017/02/wooden-tray-of-protein-foods-fish-nuts-16x9.jpg',
            url: '/'
        },
        {
            name: 'A base de legumbres',
            img: 'https://cardiosalud.org/wp-content/uploads/2019/10/legumbres-4.jpg',
            url: '/'
        },
        {
            name: 'Mascotas',
            img: 'https://images.hola.com/imagenes/estar-bien/20180417122950/perro-gato-casa-convivencia/0-558-880/perro-gato-en-casa-1-t.jpg?tx=w_1200',
            url: '/'
        }
    ]

    const settings = {
        accessibility: true,
        dots: true,
        inifinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className='m-auto w-[90%]'>
            <div className='my-10'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="h-[670px] w-[360px]">
                            <div className="w-[360px] flex justify-center items-center">
                                <img src={d.img} alt={d.name} className="h-[530px] w-[360px] object-cover rounded-2xl" style={{ objectPosition: d.objectPosition || 'center center' }} />
                            </div>

                            <div className="font-rajdhani flex flex-col justify-center items-center gap-4 p-4" >
                                <p className="font-medium text-xl">{d.name}</p>
                                <button className="text-palette-quaternary font-semibold text-xl px-8 py-3 rounded-lg border border-palette-quaternary hover:bg-palette-quaternary hover:text-white">
                                    <Link to={d.url}>Ver ahora!</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}