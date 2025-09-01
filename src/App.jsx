import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Reducer from './components/Reducer'
import FetchData from './components/FetchData'
import ContextTheme from './components/ContextTheme'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/reducer' element={<Reducer/>}/>
      <Route path='/fetchdata' element={<FetchData/>}/>
      <Route path='/theme' element={<ContextTheme/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
