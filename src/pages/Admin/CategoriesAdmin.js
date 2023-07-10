import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'
import { useCategory } from '../../hooks'
import { AddEditCategoryForm, TableCategoryAdmin, HeaPage } from '../../components/Admin'
import { ModalBasic } from '../../components/Common'

export function CategoriesAdmin() {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const {loading, categories, getCategories } = useCategory()
    console.log(categories)
    useEffect(() => {
      getCategories()
    }, [])

    const openCloseModal = () => setShowModal((prev) => {
        return !prev
    })

    const addCategory = () => {
      setTitleModal("Nueva categorias")
      setContentModal(<AddEditCategoryForm />)
      openCloseModal()
    }
    
    return (
      <div>
        <HeaPage title="Categorias" btnTitle="Nueva Categoria" btnClick={addCategory} />
        {loading ? (
          <Loader active inline="centered">
            Cargando...
          </Loader>
        ): (
          <TableCategoryAdmin categories={categories} />
        )}
        <ModalBasic 
          show={showModal} 
          onClose={openCloseModal}
          title={titleModal} 
          children={contentModal} 
        />
      </div>
    )
}
