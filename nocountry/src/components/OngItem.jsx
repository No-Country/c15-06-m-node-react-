/* eslint-disable react/prop-types */
import fundacionHuellaImg from '../imgs/fundacion-huella.png';

export function OngItem() {
    return (
        <div>
            <div className="flex justify-around mt-16">
                <div className='w-[684px] h-[686px]'>
                    <img className='w-full h-full object-cover' src={fundacionHuellaImg} alt="Fundacion huella" />
                </div>
            </div>
        </div>
    )
}