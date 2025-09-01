import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Reducer from './components/Reducer'
import FetchData from './components/FetchData'
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/reducer' element={<Reducer/>}/>
      <Route path='/fetchdata' element={<FetchData/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
