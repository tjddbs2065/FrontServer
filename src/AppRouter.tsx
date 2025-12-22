import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/route/MainLayout";
import LoginPage from "./pages/LoginPage";
import ItemPage from "./components/Item/ItemPage";
import MenuPage from "./pages/MenuPage";

export default function SystemApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/menu" element={<ProtectedRoute children={<MenuPage/>} />}></Route>
                    <Route path="/item" element={<ItemPage/>}></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function ProtectedRoute({children}: {children: React.ReactNode}){
    const token = localStorage.getItem("accessToken");

    if(!token)
        return <Navigate to="/login" replace />
    return children;
}