import { UserIcon, CartIcon, HeartIcon } from '../assets/icons/Icons'
import { Link } from 'react-router-dom'

export function HeaderIcons({ ...props }) {
  return (
    <div className='flex gap-4' {...props}>
      <HeartIcon fill='#000' width={40} height={40} />
      <UserIcon fill='#000' width={40} height={40} />
      <Link to='/cart'>
        <CartIcon fill='#000' width={40} height={40} />
      </Link>
    </div>
  )
}
