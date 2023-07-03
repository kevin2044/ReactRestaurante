import React, { useEffect } from 'react'
import { useUser } from '../../hooks'
import { HeaPage } from '../../components/Admin';

/* import { useAuth } from '../../hooks' */

export function UserAdmin() {
    const { loading, error, users, getUsers} = useUser();
    console.log('loading',loading)
    console.log('users',users)
    useEffect(() => {
        getUsers()
    }, [])
    
    return (
        <div>
            <HeaPage title='Usuarios' btnTitle='Nuevo Usuario' btnTitleTwo='Eliminar Usuario' />
            <h1>Estamos en Users admin</h1>
        </div>
    )
    /* const { auth } = useAuth();
    if(!auth.me?.is_staff){
        return (
            <div>No tienes permisos</div>
        )
    }
    return (
        <div>
            <h1>Estas en el admin users</h1>
        </div>
    ) */
}
