import { XMarkIcon } from '@heroicons/react/24/outline'

export function CartModal(props) {
    return (
        <div className="fixed inset-0 bg-gray-500 flex justify-center items-center h-screen w-screen z-10">
            <div className="bg-white px-4 py-2 rounded-lg w-100 max-h-[80vh] overflow-y-auto relative">
                <button onClick={() => props.setModalState(false)} className='absolute top-1 right-1 cursor-pointer text-gray-600 hover:text-gray-900'>
                    <XMarkIcon className='w-7 h-7' />
                </button>
                <h2 className='text-2xl font-bold mb-4'>Shopping Cart ({props.cart.length})</h2>
                {props.cart.length === 0 ? (
                    <p className='text-center text-gray-500'>Your Cart is Empty</p>
                ) : (
                    <>
                    {props.cart.map((item) => (
                        <div className='flex justify-between items-center border-b py-2'>
                            < div className='flex items-center space-x-4'>
                                <img src={item.image} alt={item.title} className='max-h-16 w-18 object-contain' />
                                <div>
                                    <h3 className='font-semibold line-clamp-1 w-48' title={item.title}>{item.title}</h3>
                                    <p className='text-gray-600'>₹ {item.price} x 1</p>
                                </div>
                            </div>
                            <button onClick={() => props.removeCart(item)} className='text-red-500 hover:text-red-700'>Remove</button>
                        </div>
                    ))}
                    <div className='mt-4 flex justify-between font-bold'>
                        <span>Total:</span>
                        <span>₹ {props.total}</span>
                    </div>
                    <button className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Checkout</button>
                    </>
                )}
            </div>
            
        </div>
    )
}