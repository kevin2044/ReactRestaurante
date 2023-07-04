import React from 'react'
import { Button } from 'semantic-ui-react'
import './HeaPage.scss'

export function HeaPage(props) {
  const { title, btnTitle, btnClick, btnTitleTwo, btnClickTwo } = props

  return (
    <div className='header-page-admin'>
      <h2>{title}</h2>
      <div>
        {btnTitle && (
          <Button positive onClick={btnClick}>
             {btnTitle}
          </Button>
        )}
      </div>
    </div>
  )
}
