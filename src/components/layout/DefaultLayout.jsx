import { Outlet } from "react-router-dom"
import HeaderComponent from "./HeaderComponent"

export default function DefaultLayout() {

    return (
        <main>
            <HeaderComponent />
            <Outlet />
        </main>
    )
}