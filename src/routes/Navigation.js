import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/* import { map } from 'lodash'
import routes from './routes' */
import { Home } from '../pages/Client'
import { ClientLayout, AdminLayout, BasicLayout } from '../layouts'
import { CategoriesAdmin, LoginAdmin, UserAdmin, ProductsAdmin } from '../pages/Admin'
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
                        <LoginAdmin />
                    </AdminLayout>
                } />
                <Route path="/admin/users" element={
                    <AdminLayout>
                        <UserAdmin />
                    </AdminLayout>
                } />
                <Route path="/admin/categories" element={
                    <AdminLayout>
                        <CategoriesAdmin />
                    </AdminLayout>
                } />
                <Route path="/admin/products" element={
                    <AdminLayout>
                        <ProductsAdmin />
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