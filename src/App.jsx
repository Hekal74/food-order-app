import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './context/CartProvider'
import MealList from './components/MealList'
import CartModal from './components/CartModal'

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className='min-h-screen flex flex-col'>
      <Header setIsCartOpen={setIsCartOpen} />
      <main className='flex-grow p-4'>
        <div className='max-w-7xl mx-auto'>
          <MealList />
        </div>
      </main>
      <Footer />
      {isCartOpen && <CartModal onClose={()=>setIsCartOpen(false)} /> }
       </div>
  );
}

function App (){
  return(
    <CartProvider>
        <AppContent />
    </CartProvider>
  )
}

export default App