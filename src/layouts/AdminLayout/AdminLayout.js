import React from 'react'
import './AdminLayout.scss'
import { LoginAdmin } from '../../pages/Admin'

export function AdminLayout(props) {
    const { children } = props
    const auth = "kevin"

    if(!auth){
      return <LoginAdmin />
    }
  return (
    <div>
        <p>AdminLayout</p>
        { children }
    </div>
  )
}
