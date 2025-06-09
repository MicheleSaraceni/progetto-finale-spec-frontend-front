import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext"
import DefaultLayout from "./components/layout/DefaultLayout"
import HomePage from "./pages/HomePage"
import ClassComparison from "./pages/ClassComparison"
import Favorites from "./pages/Favorites"
import ClassDetail from "./pages/classDetail"

export default function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/confronto" element={<ClassComparison />} />
            <Route path="/preferiti" element={<Favorites />} />
            <Route path="/classDetail/:id" element={<ClassDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}
