/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

export function OngPaymentItem({ pay }) {
    return (
        <div>
            <div className='w-[350px] h-96'>
                <Link to={`/`}>
                    <img className='w-full h-full object-cover' src={pay.img} alt={pay.name} />
                </Link>
            </div>
            <p className='text-xl font-bold text-center'>{pay.name}</p>
        </div>
    )
}
