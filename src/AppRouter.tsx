import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/route/MainLayout";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

export default function SystemApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<MainPage/>}></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}