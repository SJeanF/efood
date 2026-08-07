import Home from "./screens/Home/Home"

import { GlobalStyle } from './GlobalStyle.js'

import { BrowserRouter, Routes, Route } from "react-router"


function App() {

  return (
    <>
    <GlobalStyle/>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
