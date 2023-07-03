import React from 'react'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context'
import { Navigation } from './routes'

export default function App() {
  return (
    <AuthProvider className='app'>
      {/* <h1 className='app__title'>Hola mundo</h1> */}
      <Navigation />
      <ToastContainer 
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  )
}
