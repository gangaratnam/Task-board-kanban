
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import HomePage from './layout/HomePage'
// import Footer from './layout/Footer'

function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <div className=''>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
