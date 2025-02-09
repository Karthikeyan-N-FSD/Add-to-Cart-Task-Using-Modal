import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export function Navbar(props) {

    return (
        <nav className="bg-gray-800 text-white px-7 flex justify-between items-center">
            <a href="#" className="flex items-center gap-1">
                <img className="w-13 rounded-full" src="/logo.webp"></img>
                <p className="text-white font-semibold text-xl">KAZ Store</p>
            </a>
            <a onClick={() => props.setModalState(true)} className='relative' href="#">
                <ShoppingCartIcon className="w-11 h-11" />
                <span className='absolute top-1.75 right-3.25 text-[#52FFFF] font-bold text-sm'>{props.cart.length}</span>
            </a>
        </nav>
    )
} 