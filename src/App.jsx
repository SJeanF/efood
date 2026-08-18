import Home from "./screens/Home/Home"

import { GlobalStyle } from './GlobalStyle.js'

import { BrowserRouter, Routes, Route } from "react-router"
import RestaurantPage from "./screens/RestaurantPage/RestaurantPage.jsx"


function App() {

  return (
    <>
    <GlobalStyle/>   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/restaurant/:id" element={<RestaurantPage/>}/>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
