import { Routes, Route, useNavigate } from "react-router-dom"
import Login from "./components/login/index"
import Home from "./container/home/index"

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default App
