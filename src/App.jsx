import { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'
import { Navbar } from './Navbar';
import { CartModal } from './CartModal'
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [modalState, setModalState] = useState(false);


  let fetchProducts = async () => {
    const productsData = await fetch('https://fakestoreapi.com/products')
    const productResponse = await productsData.json()
    setProducts(productResponse)
  }

  let addToCart = (product) => {
    if (cart.includes(product)) {
      alert('Product already added to cart')
      return;
    }
    setCart([...cart, product])
    setTotal(total + product.price);
  }

  let removeCart = (product) => {
    cart.splice(cart.indexOf(product), 1)
    setCart([...cart])
    setTotal(parseFloat(cart.reduce((acc, current) => acc + current.price, 0).toFixed(2)));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='min-h-screen bg-gray-200'>
      <Navbar cart={cart} setModalState={setModalState}/>
      <div className='container mx-auto px-4 py-7'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
          {products.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} />)}
        </div>
      </div>
      {modalState && (<CartModal cart={cart} total={total} setModalState={setModalState} removeCart={removeCart}/>)}
    </div>

  )
}

export default App
