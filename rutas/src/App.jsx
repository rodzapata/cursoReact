import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { FormulasJavascrip } from './pages/FormulasJavascrip'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='formulasJavascrip' element={<FormulasJavascrip/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
