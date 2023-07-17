import React from 'react'
import { HeaPage } from '../../components/Admin'
import { Loader } from 'semantic-ui-react'

export function ProductsAdmin() {
    return (
        <div>
        <HeaPage title='Productos' btnTitle='Nuevo Producto'  />
        { loading ? (
            <Loader active inline="centered">
                Cargando...
            </Loader>
        ): (
            <TableProductAdmin />
        )}
        </div>
    )
}
