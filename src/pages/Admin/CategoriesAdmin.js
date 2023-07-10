import React, { useEffect, useState } from 'react'
import { Loader } from 'semantic-ui-react'
import { useCategory } from '../../hooks'
import { AddEditCategoryForm, TableCategoryAdmin, HeaPage } from '../../components/Admin'
import { ModalBasic } from '../../components/Common'

export function CategoriesAdmin() {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState(null)
    const [contentModal, setContentModal] = useState(null)
    const [refetch, setRefetch] = useState(false)
    const {loading, categories, getCategories, deleteCategory } = useCategory()
    console.log(categories)
    useEffect(() => {
      getCategories()
    }, [refetch])

    const openCloseModal = () => setShowModal((prev) => {
        return !prev
    })

    const onRefetch = () => {
      return setRefetch((prev) => !prev)
    }

    const addCategory = () => {
      setTitleModal("Nueva categoria")
      setContentModal(<AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} />)
      openCloseModal()
    }

    const updateCategory = (data) => {
      setTitleModal("Actualizar categoria")
      setContentModal(<AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} category={data} />)
      openCloseModal()
    }

    const onDeleteCategory = async (data) => {
      const result = window.confirm(`Eliminar categoria ${data.title}`)
      if(result){
        try {
            await deleteCategory(data.id)
            onRefetch()
        } catch (error) {
            console.error(error)
        }
      }
    }
    
    return (
      <div>
        <HeaPage title="Categorias" btnTitle="Nueva Categoria" btnClick={addCategory} />
        {loading ? (
          <Loader active inline="centered">
            Cargando...
          </Loader>
        ): (
          <TableCategoryAdmin categories={categories} updateCategory={updateCategory} onDeleteCategory={onDeleteCategory} />
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
