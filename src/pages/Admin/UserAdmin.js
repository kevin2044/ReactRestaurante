import React from 'react'
import { useAuth } from '../../hooks'

export function UserAdmin() {
    const { auth } = useAuth();
    if(!auth.me?.is_staff){
        return (
            <div>No tienes permisos</div>
        )
    }
    return (
        <div>
            <h1>Estas en el admin users</h1>
        </div>
    )
}
