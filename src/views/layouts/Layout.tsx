import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>Заголовок</header>
            <Outlet />
            <footer>Подвал</footer>
        </>
    )
}