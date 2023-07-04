import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react';
import { useUser } from '../../hooks'
import { HeaPage, TableUsers } from '../../components/Admin';
import { ModalBasic } from '../../components/Common'

/* import { useAuth } from '../../hooks' */

export function UserAdmin() {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const { loading, error, users, getUsers} = useUser();
    console.log('loading',loading)
    console.log('users',users)
    useEffect(() => {
        getUsers()
    }, [])

    const openCloseModal = () => setShowModal((prev) => {
        return !prev
    })
    
    return (
        <div>
            <HeaPage title='Usuarios' btnTitle='Nuevo Usuario' btnClick={openCloseModal} />
            {loading ? (
                <Loader active inline="centered">
                    Cargado...
                </Loader>
            ): (
                <TableUsers users={users} />
            )}
            <ModalBasic 
                show={true} 
                title='Crear usuario' 
                children={<h2>Children</h2>} 
            />
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
