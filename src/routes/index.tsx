import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from "../pages/home.tsx"



export const RoutesConfig = () => {
    return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*"  element={<Navigate to="/"/>}/>
    </Routes>
  </BrowserRouter>
    )
}
