import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./features/auth/LoginPage";
import ItemPage from "./features/item/ItemPage";
import MenuPage from "./features/menu/MenuPage";
import { useAuthStore } from "./shared/utils/AuthStore";
import MainLayout from "./shared/layouts/route/MainLayout";

export default function SystemApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/menu" element={<ProtectedRoute children={<MenuPage/>} />}></Route>
                    <Route path="/item" element={<ProtectedRoute children={<ItemPage/>} />}></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


// jwt가 없으면 로그인 페이지로 이동
function ProtectedRoute({children}: {children: React.ReactNode}){
    const isLoggedIn = useAuthStore((state)=>state.isLoggedIn);
    if(!isLoggedIn){
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}