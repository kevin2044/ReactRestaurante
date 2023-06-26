import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* import { map } from 'lodash'
import routes from './routes' */
import { Home } from '../pages/Client'
import { ClientLayout, AdminLayout, BasicLayout } from '../layouts'
import { HomeAdmin, LoginAdmin } from '../pages/Admin'
import { Error404 } from '../pages'

export function Navigation(){
    return (
        <BrowserRouter>
            <Routes>
               {/* { map(routes, (route, index) => {
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        element={
                        <route.layout>
                            <route.component />
                        </route.layout>
                        }
                    />
                }) } */}
                <Route path="/" element={
                    <ClientLayout>
                        <Home />
                    </ClientLayout>
                } />
                <Route path="/admin" element={
                    <AdminLayout>
                        <HomeAdmin />
                    </AdminLayout>
                } />
                <Route path="*" element={
                    <BasicLayout>
                        <Error404 />
                    </BasicLayout>
                } />
            </Routes>
        </BrowserRouter>
    )
}