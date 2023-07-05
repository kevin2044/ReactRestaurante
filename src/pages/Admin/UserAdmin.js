import React, { useState, useEffect } from 'react'
import { Loader } from 'semantic-ui-react';
import { useUser } from '../../hooks'
import { AddEditUsersForm, HeaPage, TableUsers } from '../../components/Admin';
import { ModalBasic } from '../../components/Common'

/* import { useAuth } from '../../hooks' */

export function UserAdmin() {
    const [showModal, setShowModal] = useState(false)
    // eslint-disable-next-line
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refetch, setRefetch] = useState(false)
    // eslint-disable-next-line
    const { loading, error, users, getUsers, deleteUser} = useUser();
    /* console.log('loading',loading)
    console.log('users',users) */
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line
    }, [refetch])

    const openCloseModal = () => setShowModal((prev) => {
        return !prev
    })

    const onRefetch = () => {
        return setRefetch((prev) => !prev)
    }

    const addUser = () => {
        setTitleModal("Nuevo usuario")
        setContentModal(
            <AddEditUsersForm 
                onClose={openCloseModal} 
                onRefetch={onRefetch} 
            />
        )
        openCloseModal()
    }

    const updateUser = (data) => {
        console.log('Editar')
        console.log(data)
        setTitleModal("Actualizar usuario")
        setContentModal(
            <AddEditUsersForm 
                onClose={openCloseModal} 
                onRefetch={onRefetch}
                user={data} 
            />
        )
        openCloseModal()
    }

    const onDeleteUser = async(data) => {
        const result = window.confirm(`Eliminar usuario ${data.email}`)
        if(result){
            try {
                await deleteUser(data.id)
                onRefetch()
            } catch (error) {
                console.error(error)
            }
        }
    }
    
    return (
        <div>
            <HeaPage title='Usuarios' btnTitle='Nuevo Usuario' btnClick={addUser} />
            {loading ? (
                <Loader active inline="centered">
                    Cargado...
                </Loader>
            ): (
                <TableUsers users={users} updateUser={updateUser} onDeleteUser={onDeleteUser} />
            )}
            <ModalBasic 
                show={showModal} 
                onClose={openCloseModal}
                title='Crear usuario' 
                children={contentModal} 
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
