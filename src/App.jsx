import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Reducer from './components/Reducer'
import FetchData from './components/FetchData'
import ContextTheme from './components/ContextTheme'
import React, { Suspense } from 'react'
import ReactMemo from './components/ReactMemo'
import MemoComponent from './components/MemoComponent'
import UseCallBackMemo from './components/useCallBackMemo'
import RealDom from './components/RealDom'
const Home = React.lazy(()=> import("./components/Home"));

function App() {


  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<div>Loading....</div>}>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route  path='/reducer' element={<Reducer/>}/>
      <Route path='/fetchdata' element={<FetchData/>}/>
      <Route path='/theme' element={<ContextTheme/>}/>
      <Route path='/memo' element={<ReactMemo/>}/>
      <Route path='/memofun' element={<MemoComponent/>}/>
      <Route path='/callbackmemo' element={<UseCallBackMemo/>} />
      <Route path='/realdom' element={<RealDom/>} />
    </Routes>
      </Suspense>
    </BrowserRouter>

    </>
  )
}

export default App
