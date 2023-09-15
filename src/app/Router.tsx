import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}